import { Route, Routes } from 'react-router-dom';
import {
    Content,
    GuiCoures,
    GuideChart,
    GuideLeaner,
    GuideLogin,
    GuideManager,
    GuideRefreshPasswrod,
    GuideStudent,
    Home,
} from './page';
import { path } from './until/path';
import afterThematic from './assets/img/chuyenDe1.png';
import beforeThematic from './assets/img/chuyenDe2.png';
import listThematic from './assets/img/chuyenDe3.png';
import afterSaff from './assets/img/nhanVien1.png';
import beforeSaff from './assets/img/nhanVien2.png';
import listsaff from './assets/img/nhanVien3.png';

function App() {
    return (
        <div className="bg-[#0f172a] w-full h-full text-white font-mono">
            <Routes>
                <Route path={path.home} element={<Home />} />
                <Route path={path.guide} element={<Content />}>
                    <Route path={path.guideLogin} element={<GuideLogin />} />
                    <Route path={path.guideRefreshPassword} element={<GuideRefreshPasswrod />} />
                    <Route
                        path={path.guideSaff}
                        element={
                            <GuideManager title={'Nhân Viên'} list={listsaff} after={afterSaff} before={beforeSaff} />
                        }
                    />
                    <Route
                        path={path.guideThematic}
                        element={
                            <GuideManager
                                title={'Chuyên Đề'}
                                list={listThematic}
                                after={afterThematic}
                                before={beforeThematic}
                            />
                        }
                    />
                    <Route path={path.guiCoures} element={<GuiCoures />} />
                    <Route path={path.guiLeaner} element={<GuideLeaner />} />
                    <Route path={path.guiStudent} element={<GuideStudent />} />
                    <Route path={path.guiChart} element={<GuideChart />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
