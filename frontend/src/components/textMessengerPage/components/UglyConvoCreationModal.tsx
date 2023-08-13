import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";
import ModalWrapper from "../../../global/helperModal/HelperModal";
import { useEffect, useState } from "react";
import { User } from "../../../API";

interface convoModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  availableUsers: User[];
  addConversation: (name: string, selectedUsers: User[]) => void;
}

export const UglyConvoCreationModal: React.FC<convoModalProps> = (
  props: convoModalProps
) => {
  const { showModal, setShowModal, availableUsers, addConversation } = props;
  const [newConvoName, setNewConvoName] = useState("");
  const [selectionState, setSelectionStates] = useState(
    availableUsers.map((user) => {
      return { user: user, selected: false };
    })
  );
  useEffect(() => {
    let newSelectionState = availableUsers.map((user) => {
      return { user: user, selected: false };
    });
    setSelectionStates(newSelectionState);
  }, [availableUsers]);

  const updateSelection = (user: User) => {
    const newSelectionStates = selectionState.map((option) => {
      return option.user.id === user.id
        ? { user: option.user, selected: !option.selected }
        : option;
    });
    setSelectionStates(newSelectionStates);
  };

  const addConvo = () => {
    // addConversation(newConvoName);
    let selectedUsers = selectionState
      .map((option) => {
        return option.selected ? option.user : undefined;
      })
      .filter((user) => user !== undefined) as User[];
    addConversation(newConvoName, selectedUsers);
    setShowModal(false);
    setNewConvoName("");
  };
  return (
    <ModalWrapper
      heading={"Create a conversation"}
      showModal={showModal}
      handleClose={() => setShowModal(false)}
      handleSuccess={addConvo}
    >
      <div>
        <TextField
          label={"name"}
          value={newConvoName}
          onChange={(e) => {
            setNewConvoName(e.target.value);
          }}
        />
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Add people</FormLabel>
          <FormGroup aria-label="position" row>
            {selectionState.map((option: { user: User; selected: boolean }) => {
              return (
                <FormControlLabel
                  label={option.user.username}
                  control={
                    <Checkbox
                      checked={option.selected}
                      onChange={() => updateSelection(option.user)}
                    />
                  }
                />
              );
            })}
          </FormGroup>
        </FormControl>
      </div>
    </ModalWrapper>
  );
};
