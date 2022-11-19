import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Card,
    CardBody,
    CardHeader,
    Code,
    Heading,
    ListItem,
    Text,
    UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

export default function PolicyBox() {
    return (
        <Box
            width="100vw"
            display="flex"
            alignItems="center"
            flexDirection="column"
        >
            <Card
                width="88%"
                maxWidth="800px"
                backgroundColor="white"
                borderRadius="3xl"
                className="mt-32 py-3 px-2 pb-10 leading-6 md:w-[85%]"
            >
                <CardHeader>
                    <Heading size="lg">Chính sách bảo hành</Heading>
                </CardHeader>
                <CardBody paddingTop="0px" paddingBottom="0px">
                    <Accordion allowMultiple allowToggle>
                        <AccordionItem>
                            <AccordionButton
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Text size="md">Thời gian bảo hành</Text>
                                <AccordionIcon className="ml-2" />
                            </AccordionButton>
                            <AccordionPanel
                                className="my-2"
                                textAlign="justify"
                            >
                                <Text>
                                    Thời gian bảo hành tương ứng với thời hạn
                                    gói cước khách mua.
                                    <br />
                                    <br />
                                    Ví dụ: Sản phẩm{' '}
                                    <b>Tài khoản Netflix (1 tháng)</b> sẽ có
                                    thời gian bảo hành là <b>30 ngày</b>
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionButton
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Text size="md">Chính sách bảo hành</Text>
                                <AccordionIcon className="ml-2" />
                            </AccordionButton>
                            <AccordionPanel
                                className="my-2"
                                textAlign="justify"
                            >
                                <UnorderedList>
                                    <ListItem>
                                        Tài khoản phát sinh lỗi trong quá trình
                                        sử dụng sẽ được khắc phục sự cố trong
                                        24h
                                    </ListItem>
                                    <ListItem>
                                        Khách hàng được cung cấp tài khoản thay
                                        thế sử dụng tạm thời trong thời gian chờ
                                        fix lỗi
                                    </ListItem>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionButton
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Text size="md">Chính sách hoàn tiền</Text>
                                <AccordionIcon className="ml-2" />
                            </AccordionButton>
                            <AccordionPanel
                                className="my-2"
                                textAlign="justify"
                            >
                                <UnorderedList className="mb-4">
                                    <ListItem>
                                        Khách hàng sẽ được hoàn tiền trong
                                        trường hợp sự cố không thể khắc phục.
                                    </ListItem>
                                    <ListItem>
                                        Số tiền hoàn lại sẽ được tính theo quy
                                        tắc:
                                        <UnorderedList>
                                            <ListItem>
                                                Sử dụng không quá 5 ngày: Hoàn
                                                100% số tiền (*)
                                            </ListItem>
                                            <ListItem>
                                                Sử dụng trên 5 ngày: Hoàn tiền
                                                theo số ngày chưa sử dụng (Làm
                                                tròn đến hàng nghìn)
                                            </ListItem>
                                        </UnorderedList>
                                    </ListItem>
                                    <ListItem>
                                        Số tiền sẽ được chuyển về tài khoản ngân
                                        hàng của khách hàng trong 24h làm việc.
                                    </ListItem>
                                </UnorderedList>
                                <b>Ví dụ:</b>
                                <Text className="ml-4">
                                    Sản phẩm Tài khoản Netflix (1 tháng) giá tại
                                    thời điểm khách hàng mua là 99.000 đ. Sử
                                    dụng được 12 ngày thì phát sinh lỗi. Như vậy
                                    số tiền được hoàn lại sẽ là:
                                    <br />
                                    <Code margin="8px">
                                        99.000 * (30 - 12)/30 = 59.400 làm tròn
                                        thành 60.000
                                    </Code>
                                    <br /> Như vậy trong trường hợp này khách
                                    hàng sẽ được hoàn lại 60.000đ.
                                    <br />
                                    <br />
                                    <i className="mt-4">
                                        (*) Số tiền phát sinh mua hàng tại thời
                                        điểm khách mua hàng, sau khi đã trừ mã
                                        giảm giá, mã giới thiệu, tiền hoàn khách
                                        VIP (nếu có)
                                    </i>
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
        </Box>
    );
}
