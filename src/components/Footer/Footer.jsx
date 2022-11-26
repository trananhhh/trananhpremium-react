import { Alert, AlertIcon, Box, Button, Image } from '@chakra-ui/react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase.config';

const Footer = () => {
    const navigate = useNavigate();

    const [cusName, setCusName] = useState('');
    const [cusEmail, setCusEmail] = useState('');
    const [isSaved, setIsSaved] = useState(false);
    const [hasError, setHasError] = useState('');

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubscribe = () => {
        setIsSaved(false);
        if (cusEmail.length === 0 || cusName.length === 0)
            setHasError('Bạn chưa nhập đủ thông tin!');
        else if (!validateEmail(cusEmail))
            setHasError('Email không chính xác!');
        else {
            addDoc(collection(db, 'subscriber'), {
                name: cusName,
                email: cusEmail,
            })
                .then(() => {
                    setIsSaved(true);
                    setHasError('');
                })
                .catch((err) => console.error(err));
        }
    };

    return (
        <footer className="flex items-center justify-center flex-col mt-20">
            <div className="grid gap-8 px-8 lg:grid-cols-3 mx-auto max-w-md lg:max-w-[1280px]">
                <div className="lg:col-span-1 order-1 flex justify-center">
                    <Box>
                        <Image
                            src={
                                process.env.PUBLIC_URL +
                                '/assets/LOGO-dark.webp'
                            }
                            mb="8"
                            px="4"
                        />
                        <p className="border-l-4 border-red-700 text-lg tracking-tight italic leading-6 text-justify bg-gray-200 rounded-2xl p-6 ">
                            Sứ mệnh của
                            <span className="font-[billCorp] pt-2 py-1 opacity-90 mx-2 font-normal md:font-bold">
                                trananh
                                <span className="opacity-80 ml-0 pl-0">
                                    premium
                                </span>
                            </span>
                            là đem đến cho người Việt cơ hội tiếp cận với các
                            công cụ phục vụ làm việc, học tập, giải trí với giá
                            rẻ hơn lên đến 90% so với giá gốc.
                        </p>
                    </Box>
                </div>

                <div className="order-3 lg:order-2 flex flex-col lg:items-center">
                    <div>
                        <h4 className="border-l-4 border-red-700 pl-2 text-xl font-bold mb-4">
                            Liên hệ
                        </h4>
                        <p>
                            Hotline:{' '}
                            <a href="tel:0982202602" className="font-bold">
                                0982.202.602
                            </a>
                        </p>
                        <p>
                            Email:{' '}
                            <a
                                href="mailto:support@trananhpremium.com"
                                className="font-bold"
                            >
                                support@trananhpremium.com
                            </a>
                        </p>
                    </div>
                    <Button
                        bg={'rgb(185, 28, 28)'}
                        _hover={{ bg: 'rgba(185, 28, 28, 0.586)' }}
                        color="white"
                        mt="12"
                        w="100%"
                        // variant="outline"
                        className="lg:max-w-[300px] animate-bounce"
                        onClick={() => navigate('/free-netflix')}
                    >
                        🎁 Nhận account Netflix miễn phí
                    </Button>
                </div>

                <div className="order-2 lg:order-3 flex lg:justify-center">
                    <div>
                        <h4 className="border-l-4 border-red-700 pl-2 text-xl font-bold mb-4">
                            Nhận thông tin ưu đãi mới nhất
                        </h4>

                        {isSaved && (
                            <Alert
                                status="success"
                                variant="subtle"
                                borderRadius="xl"
                                mb="4"
                            >
                                <AlertIcon />
                                Đăng ký thành công!
                            </Alert>
                        )}

                        {hasError.length > 0 && (
                            <Alert
                                status="error"
                                variant="subtle"
                                borderRadius="xl"
                                mb="4"
                            >
                                <AlertIcon />
                                {hasError}
                            </Alert>
                        )}

                        <div className="w-full flex flex-col items-start">
                            <div className="max-w-20">
                                <input
                                    className="px-4 py-3 rounded-xl mb-4 w-full"
                                    placeholder="Nhập Tên của bạn"
                                    type="text"
                                    required
                                    value={cusName}
                                    onChange={(e) => setCusName(e.target.value)}
                                />
                                <input
                                    className="px-4 py-3 rounded-xl mb-4 w-full"
                                    type="email"
                                    required
                                    placeholder="Nhập Email của bạn"
                                    value={cusEmail}
                                    onChange={(e) =>
                                        setCusEmail(e.target.value)
                                    }
                                />
                            </div>
                            <button
                                onClick={() => handleSubscribe()}
                                className="bg-red-700 text-white px-6 py-4 rounded-full font-bold hover:drop-shadow-xl transition-all ease-in-out"
                            >
                                <FontAwesomeIcon
                                    icon={faPaperPlane}
                                    className="mr-2"
                                />
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <span className="text-xs md:text-normal text-gray-600 pb-12 pt-8 px-12 text-center mb-20 lg:mb-0">
                © 2020 by
                <span className="font-[billCorp] opacity-90 ml-1 font-normal md:font-bold">
                    trananh
                    <span className="opacity-80 ml-0 pl-0">premium</span>
                </span>
                . All Rights Reserved.
            </span>
        </footer>
    );
};

export default Footer;
