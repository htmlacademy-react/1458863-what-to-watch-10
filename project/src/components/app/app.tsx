import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import Layout from '../../components/layout/layout';
import MainScreen from '../../pages/main-screen/main-screen';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import Page404 from '../../pages/page404/page404';
import LoginRoute from '../../components/login-route/login-route';
import { FilmProps } from '../../types/types';

type AppProps = {
  mainFilm: FilmProps,
  films: FilmProps[]
}

export default function App({ mainFilm, films }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainScreen films={films} mainFilm={mainFilm} />} />
          <Route path='login' element={<SignIn />} />
          <Route path='mylist' element={
            <LoginRoute>
              <MyList films={films} />
            </LoginRoute>
          }
          />
          <Route path='films/'>
            <Route index element={<Film films={films}/>} />
            <Route path=':id/' element={<Film films={films}/>} />
            <Route path=':id/review' element={
              <LoginRoute>
                <AddReview films={films}/>
              </LoginRoute>
            }
            />
          </Route>
          <Route path='player/:id' element={<Player films={films}/>} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
