import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from '@chakra-ui/react';
import React from 'react';
import Cover from '../../components/Cover/Cover';
import GroupBorder from '../../components/GroupBorder/GroupBorder';
import ProductIntro from '../../components/ProductIntro/ProductIntro';
import ProductPlan from '../../components/ProductPlan/ProductPlan';
import './index.scss';

const Spotify = () => {
    const savingPlanDes = [
        '👏🏻 Nâng cấp tài khoản chính chủ',
        '👏🏻 Bảo hành đủ thời gian sử dụng',
        '👏🏻 Khắc phục lỗi trong vòng 24h',
        '👏🏻 Nói không với Token',
    ];
    const savingPlanPrice = [
        { duration: 2, price: 50 },
        { duration: 4, price: 85 },
        { duration: 8, price: 155 },
    ];

    const stablePlanDes = [
        '👏🏻 Nâng cấp tài khoản chính chủ',
        '👏🏻 Bảo hành đủ thời gian sử dụng',
        '👏🏻 KHÔNG lỗi trong quá trình sử dụng',
        '👏🏻 Nói không với Token',
    ];
    const stablePlanPrice = [
        { duration: 6, price: 179 },
        { duration: 12, price: 319 },
        { duration: 24, price: 569 },
    ];

    return (
        <Box
            position="relative"
            paddingTop="100px"
            margin="auto"
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Cover imageSrc="/cover/spotify.png" />
            <ProductIntro
                title="Spotify Premium"
                subtitle="Nâng cấp trước, thanh toán sau."
                description="
                    Spotify là một dịch vụ cung cấp nhạc, podcast và video kỹ
                    thuật số cho phép bạn truy cập hàng triệu bài hát và các nội
                    dung khác của các nghệ sĩ trên khắp thế giới."
                imageSrc="assets/logo/spotify.png"
            />
            <GroupBorder>
                <ProductPlan
                    name="Gói Tiết kiệm"
                    minPrice="19"
                    description={savingPlanDes}
                    pricing={savingPlanPrice}
                />

                <ProductPlan
                    name="Gói Ổn định"
                    minPrice="24"
                    description={stablePlanDes}
                    pricing={stablePlanPrice}
                />
            </GroupBorder>
        </Box>
    );
};

export default Spotify;
