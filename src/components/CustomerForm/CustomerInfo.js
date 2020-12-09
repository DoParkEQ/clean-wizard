import React, { useState } from 'react';
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import { Typography } from '@material-ui/core';
import confirmationImg from '../../assets/confirmation.png';
import { makeStyles } from '@material-ui/core/styles'
import emailjs from 'emailjs-com';


const useStyles = makeStyles((theme) => ({
    menuItem: {
        boxShadow: theme.shadows[4],
    },
    button: {
        marginTop: theme.spacing(8),
    },
}))

const formList = [
    {
        id: 'name',
        label: '이름',
    },
    {
        id: 'contact',
        label: '연락처',
    },
    {
        id: 'address',
        label: '주소',
    },
    {
        id: 'city',
        label: '도시',
    },
    {
        id: 'postal',
        label: '포스탈 코드',
    },
]
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const nameRegExp = /^[a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;
const postalRegExp = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

const validationSchema = yup.object({
    name: yup
        .string()
        .min(2, "이름이 짧습니다")
        .matches(nameRegExp, "문자만 입력가능합니다.")
        .required("성함을 입력해주세요"),
    contact: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("전화번호를 입력해주세요"),
    address: yup
        .string()
        .required("주소를 입력해주세요"),
    city: yup.string().required("도시를 입력해주세요"),
    postal: yup
        .string()
        .matches(postalRegExp, "맞지않는 코드입니다.")
        .required("코드를 입력해주세요")
});

const CustomerInfo = ({ skipped, setModalOpen, houseInfo }) => {
    const classes = useStyles()
    const [isSubmitted, setIsSubmitted] = useState(false)

    const paragraph = skipped ? '상업용 청소는 직접 상담을 통해 문의 가능합니다.' : ''

    const formik = useFormik({
        initialValues: {
            name: "",
            contact: "",
            address: "",
            city: "",
            postal: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setIsSubmitted(true)
            const postHouseInfo = houseInfo.reduce((acc, val) => {
                return { ...acc, [val.id]: val.currentValue }
            }, {})

            emailjs.send('consumer_info', 'consumer_info', { ...values, ...postHouseInfo }, 'user_AFxcscd9Avw8VS3Cr4Q2E')
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function (error) {
                    console.log('FAILED...', error);
                });

        }
    });
    return (
        <div className={classes.root}>
            <form onSubmit={formik.handleSubmit}>
                {!isSubmitted ? (
                    <>
                        <Typography variant='subtitle1'>고객 양식서</Typography>
                        <Typography>{paragraph}</Typography>
                        <div style={{ marginTop: 16 }}>
                            <Typography>고객님의 정보를 입력해주세요.</Typography>
                            {formList.map(({ id, label }) => <TextField
                                fullWidth
                                id={id}
                                label={label}
                                value={formik.values[id]}
                                onChange={formik.handleChange}
                                error={formik.touched[id] && Boolean(formik.errors[id])}
                                helperText={formik.touched[id] && formik.errors[id]}
                            />)}
                            <div className={classes.button}>
                                <Button color="primary" variant="contained" fullWidth type="submit" >
                                    예약문의하기
                                </Button>
                            </div>
                        </div></>) : (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography gutterBottom variant='h5'>문의 완료</Typography>
                            <Typography>감사합니다!</Typography>
                            <Typography>곧 연락 드리도록 하겠습니다.</Typography>
                            <div style={{ padding: 32 }}>
                                <img style={{ height: 150 }} src={confirmationImg} />
                            </div>
                            <Button color="primary" variant="outlined" fullWidth type="submit" onClick={() => setModalOpen(false)}>
                                닫기
                        </Button>
                        </div>
                    )
                }
            </form>
        </div >
    );
};




export default CustomerInfo;