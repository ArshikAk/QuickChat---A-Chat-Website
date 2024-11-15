import { useEffect } from "react";
import { useSocket } from "../context/SocketContext";
import { useAuth } from "../context/AuthContext";

const useListenMessage = (setMessages) => {
    const { socket } = useSocket();
    const { user } = useAuth();

    useEffect(() => {
        if (!socket) return; 

        const handleNewMessage = (data) => {

            const newMessage = {
                senderId: data.senderId,
                receiverId: user._id,
                message: data.message,
            };
            
            setMessages((prevMessages) => (Array.isArray(prevMessages) ? [...prevMessages, newMessage] : [newMessage]));
        };

        socket.on("newMessage", handleNewMessage);

        return () => {
            socket.off("newMessage", handleNewMessage);
        };
    }, [socket, user._id, setMessages]);

    return null;
};

export default useListenMessage;
