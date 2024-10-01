import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectUsers } from "../../store/features/users";
import { getUsers } from "../../store/features/users/asyncActions";

/**
 * @description Custom Hook que ejecuta el dispatch para obtener los usuarios y nos develve la información que se guarda en la store.
 * @returns data: información guardadada en la store, isLoading: valor booleano que nos indicia si la petición se está ejecutando.
 */
const useUsers = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector(selectUsers);

  useEffect(() => {
    const promise = dispatch(getUsers());

    return () => {
      //si se desrenderiza el componente y está ejecutandose permite cancelar la petición
      promise?.abort();
    };
  }, [dispatch]);

  return { data, isLoading };
};

export default useUsers;
