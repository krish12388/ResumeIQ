import React, { useEffect } from 'react'
import {useAuth} from "./features/auth/hooks/useAuth"
import toast from "react-hot-toast";
import { Navigate } from 'react-router';

function Protected({children}) {
    const {user, loading, error, setError} = useAuth();
    
    useEffect(() => {
        if (loading) {
            toast.loading("Loading...", { id: "protected" });
        } else {
            toast.dismiss("protected");
        }
    }, [loading]);

    useEffect(() => {
        if (!loading && !user) {
            toast.error("Please login");
            setError(null);
        } else if (!loading && error) {
            toast.error(error);
            setError(null);
        }
    }, [loading, user, error, setError]);

    if (loading) {
        return null;
    }

    if (!user || error) {
        return <Navigate to="/login" />;
    }
    
    return children;
}

export default Protected