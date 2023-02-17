import React from 'react';
import login from '../assets/img/login.png';
import bd from '../assets/img/bangdiem1.png';
import main from '../assets/img/main.png';
import leaner from '../assets/img/thongkenguoihoc.png';
import pointThematic from '../assets/img/diemchuyende.png';
import revenue from '../assets/img/doanhthu1.png';
import { SectionGuide } from '../component';

const GuideChart = () => {
    return (
        <section id="guide-login" className="pt-[61px] flex flex-col gap-20">
            <h1 className="text-3xl font-bold">- Hướng Dẫn Sử Dụng Thống Kê</h1>

            <div className="grid grid-cols-2 justify-between">
                <div className="flex flex-col gap-10">
                    <SectionGuide title={'1 - Đăng nhập vào ứng dụng'}>
                        <p>Đăng nhập vào ứng dụng thành công mới có thể sử dụng các chức năng khác</p>
                    </SectionGuide>
                </div>

                <div className="flex justify-end">
                    <img src={login} alt="login" />
                </div>
            </div>

            <div className="grid grid-cols-2 justify-between gap-7">
                <div className="flex flex-col gap-10">
                    <SectionGuide title={'2 - Giao diện chính'}>
                        <p>
                            Sau khi vào giao diện chính -{'>'} Bấm và Thống Kê (Doanh thu chỉ có tài khoản role quản lí
                            mới có thể xem)
                        </p>
                    </SectionGuide>
                </div>

                <div className="flex justify-end">
                    <img src={main} alt="login" />
                </div>
            </div>

            <div className="grid grid-cols-2 justify-between gap-7">
                <div className="flex flex-col gap-10">
                    <SectionGuide title={'3 - Xem Bảng Điểm Của Học Viên'}>
                        <p>
                            Bảng điểm sẽ hiển thị thông về xếp loại, điểm, họ tên và mã của học viên tướng ứng với khóa
                            học được chọn trên danh sách chọn khóa học
                        </p>
                    </SectionGuide>
                </div>

                <div className="flex justify-end">
                    <img src={bd} alt="login" />
                </div>
            </div>

            <div className="grid grid-cols-2 justify-between gap-7">
                <div className="flex flex-col gap-10">
                    <SectionGuide title={'4 - Xem Số Lượng Người Học'}>
                        <p>Hiển thị số lượng người học theo từng năm, cho biết người đăng kí sớm nhất và muộn nhất</p>
                    </SectionGuide>
                </div>

                <div className="flex justify-end">
                    <img src={leaner} alt="login" />
                </div>
            </div>

            <div className="grid grid-cols-2 justify-between gap-7">
                <div className="flex flex-col gap-10">
                    <SectionGuide title={'5 - Xem Thống Kê Của Các Chuyên Đề'}>
                        <p>Hiển thị các thông tin tổng hợp liên quan đến Chuyên Đề</p>
                    </SectionGuide>
                </div>

                <div className="flex justify-end">
                    <img src={pointThematic} alt="login" />
                </div>
            </div>

            <div className="grid grid-cols-2 justify-between gap-7">
                <div className="flex flex-col gap-10">
                    <SectionGuide title={'6 - Xem Thông Tin Doanh Thu'}>
                        <p>Hiển thị doanh thu theo từng năm của công ty (chỉ quản lí mới có thể xem doanh thu)</p>
                    </SectionGuide>
                </div>

                <div className="flex justify-end">
                    <img src={revenue} alt="login" />
                </div>
            </div>

            <div className="h-[400px] w-full"></div>
        </section>
    );
};

export default GuideChart;
