import React from 'react';
import login from '../assets/img/login.png';
import { BsDot } from 'react-icons/bs';
import { SectionGuide } from '../component';

const GuideLogin = () => {
    return (
        <section className="pt-[61px] flex flex-col gap-20 h-screen">
            <h1 className="text-3xl font-bold">- Hướng Dẫn Đăng Nhập</h1>

            <div className="grid grid-cols-2 justify-between">
                <div className="flex flex-col gap-10">
                    <SectionGuide title={'1 - Mở chương trình'}>
                        <p>Nhập tên đăng nhập và mật khẩu vào ô tương ứng</p>
                    </SectionGuide>

                    <SectionGuide title={'2 - Đăng nhập vào ứng dụng'}>
                        <p>Sau khi nhập đúng tên đăng nhập và mật khẩu vào ô tương ứng thì ấn nút Đăng Nhập</p>
                    </SectionGuide>

                    <SectionGuide title={'Khác'} icon={<BsDot />}>
                        <p>Nút Kết Thúc để kêt thúc đăng nhập</p>
                    </SectionGuide>
                </div>

                <div className="flex justify-end">
                    <img src={login} alt="login" />
                </div>
            </div>
        </section>
    );
};

export default GuideLogin;
