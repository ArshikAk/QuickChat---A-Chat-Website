import { useEffect } from "react";
import { useSocket } from "../context/SocketContext";
import { useAuth } from "../context/AuthContext";

const useListenMessage = ( messages ,setMessages) => {
    const { socket } = useSocket();
    const { user } = useAuth();

    useEffect(() => {
        const handleNewMessage = (text) => {
            const newMessage = {
                senderId: " ",
                receiverId : user._id,
                message: text,
            };

            setMessages((prevMessages) => [...prevMessages, newMessage]);
        };

        if(socket)
        {
            socket.on("newMessage", handleNewMessage);
        }

        // return () => {
        //     socket.off("newMessage", handleNewMessage);
        // };
    }, [socket, user, setMessages]);

    return null;
}

export default useListenMessage;
