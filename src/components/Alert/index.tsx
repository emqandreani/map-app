import { Box } from "@mui/material";
import { CheckCircle, CircleXmark } from "@architecture-it/stylesystem";
import { Alert as AlertStyleSystem } from "@architecture-it/stylesystem/Alert";

import { TypeAlert, hide, selectAlert } from "../../store/features/alert";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import styles from "./styles.module.scss";

export const getIcon = (type: TypeAlert) =>
  type === "success" ? <CheckCircle /> : <CircleXmark />;

const TemplateAlert = () => {
  const { message, type, open } = useAppSelector(selectAlert);
  const dispatch = useAppDispatch();

  return open ? (
    <Box className={styles.container}>
      <AlertStyleSystem
        color={type}
        data-testid="alert"
        icon={getIcon(type)}
        open={open}
        variant="outlined"
        onCloseProp={() => {
          dispatch(hide());
        }}
      >
        {message}
      </AlertStyleSystem>
    </Box>
  ) : null;
};

export default TemplateAlert;
