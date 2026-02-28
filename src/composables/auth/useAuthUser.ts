import Cookies from 'js-cookie';

export const useAuthUser = () => {
    // get user dari cookies
    const user = Cookies.get('user');

    if (user) {
        // parsing JSON jika ada
        return JSON.parse(user);
    }

    // kembalikan null jika tidak ada
    return null;
};
