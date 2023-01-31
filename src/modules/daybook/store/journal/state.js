//el state es reactivo todos loc cambios que se hayan hecho por las
// mutaciones se reflejan aquí y lo comunica a los escuchadores de los componentes 
// que los atañen.

export default  () => ({
    isLoading: true,
    entries: [
        {
            id:'1',
            date: new Date().toDateString(),
            text: 'Ipsum elit sit excepteur culpa qui laboris esse commodo excepteur adipisicing voluptate do. In elit commodo minim esse laborum proident qui ad ipsum do ullamco. Nostrud adipisicing commodo mollit elit nulla. Incididunt aliqua esse ipsum cillum culpa minim tempor nostrud mollit consectetur nisi tempor fugiat. Reprehenderit proident consectetur deserunt enim do non nisi eiusmod ea officia.',
            picture: null,
        },
        {
            id: '2',
            date: new Date().toDateString(),
            text: 'Consequat aliquip dolore nulla deserunt quis proident. Minim ad quis laborum pariatur eu eiusmod duis ut cupidatat cupidatat consectetur est. Qui do anim mollit Lorem esse. Cupidatat pariatur enim laborum voluptate excepteur eu officia duis velit magna cillum. Sint incididunt ea quis ea nostrud aliquip esse cupidatat aliquip dolor aliquip ut. Do mollit anim duis occaecat esse ex id veniam ex labore.',
            picture: null,
        },
        {
            id: '3',
            date: new Date().toDateString(),
            text: 'Ipsum qui excepteur minim sint deserunt eu ex laboris. Quis anim esse sint reprehenderit. Quis pariatur nisi consequat voluptate quis Lorem. Qui aliqua consequat id labore consequat amet velit commodo adipisicing laborum. Mollit pariatur ad dolore cillum officia excepteur velit est nisi aute non ea excepteur. Veniam officia minim labore nisi aute irure sit nulla adipisicing veniam officia labore. Exercitation eiusmod esse labore eu ea labore pariatur nulla.',
            picture: null,
        },
        {
            id: '10',
            date: new Date().toDateString(),
            text: 'por defecto',
            picture: null,
        },
        /* {
            id: new Date().getDate() + 1000,
            date: new Date().toDateString(),
            text: 'Ipsum qui excepteur minim sint deserunt eu ex laboris. Quis anim esse sint reprehenderit. Quis pariatur nisi consequat voluptate quis Lorem. Qui aliqua consequat id labore consequat amet velit commodo adipisicing laborum. Mollit pariatur ad dolore cillum officia excepteur velit est nisi aute non ea excepteur. Veniam officia minim labore nisi aute irure sit nulla adipisicing veniam officia labore. Exercitation eiusmod esse labore eu ea labore pariatur nulla.',
            picture: null,
        }, */
    ]

})