import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './pages/Dashboard.vue'
import TambahKK from './pages/TambahKK'
import DetailKK from './pages/DetailKK'
import UpdateKK from './pages/UpdateKK'
import ListAnggota from './pages/ListAnggota'

export default [
    {
        path: "/",
        component: Login
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/dashboard",
        component:Dashboard

    },
    {
        path: "/tambahkk",
        component: TambahKK
    },
    {
        path: "/detailkk/:id",
        name: 'detailkk',
        component: DetailKK
       
    },
    {
        path: "/updatekk",
        component: UpdateKK,
      
    },
    {
        path: "/detailkk/:id/listanggota",
        name:"listanggota",
        component: ListAnggota
    },
]