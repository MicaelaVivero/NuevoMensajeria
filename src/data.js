import gatito from './Components/assets/imgs/gatito.jpg'
import gatito2 from './Components/assets/imgs/gatito2.jpg'
import gatito3 from './Components/assets/imgs/gatito3.jpg'

export const MOOK_CONTACTOS =[
    {
        nombre: 'Gato Messi',
        thumbnail: gatito,
        ultima_conexion: 'ayer',
        id: 1,
        mensajes:[
                    {
                        author: 'Gato Messi',
                        text: 'Buenass',
                        estado: 'visto',
                        day: 'hoy',
                        hour: '13:15',
                        id: '1'
                    }
                ]
    },
        {
                nombre: 'Abuelita',
                id: 2,
                thumbnail: gatito2,
                ultima_conexion: 'ayer',
                mensajes:[
                            {
                                author: 'Abuelita',
                                text: 'hola nino',
                                estado: 'entregado',
                                day: 'ayer',
                                hour: '13:15',
                                id: '2'
                            }
                        ]
        },
        {
            nombre: 'Gato Holanda',
            id: 3,
            thumbnail: gatito3,
            ultima_conexion: 'ayer',
            mensajes:[
                        {
                            author: 'Gato Holanda',
                            text: 'Juju',
                            estado: 'visto',
                            day: 'hoy',
                            hour: '13:15',
                            id: '3'
                        }
                    ]
        }
]