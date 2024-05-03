import { Socket } from 'socket.io';
import socketIO from 'socket.io';

export const disconnect = ( cliente: Socket ) => {
    cliente.on('disconnect', () => {
        console.log('Disconnect Client');
    });

}
// Listening messages
export const mensaje = ( cliente: Socket, io:socketIO.Server ) => {

    cliente.on('mensaje', ( payload )=>{

        console.log('Mensaje recibido', payload);

        io.emit('mensaje-nuevo', payload);

    });
}









