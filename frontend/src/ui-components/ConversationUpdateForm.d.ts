/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Conversation } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConversationUpdateFormInputValues = {
    name?: string;
};
export declare type ConversationUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConversationUpdateFormOverridesProps = {
    ConversationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConversationUpdateFormProps = React.PropsWithChildren<{
    overrides?: ConversationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    conversation?: Conversation;
    onSubmit?: (fields: ConversationUpdateFormInputValues) => ConversationUpdateFormInputValues;
    onSuccess?: (fields: ConversationUpdateFormInputValues) => void;
    onError?: (fields: ConversationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConversationUpdateFormInputValues) => ConversationUpdateFormInputValues;
    onValidate?: ConversationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ConversationUpdateForm(props: ConversationUpdateFormProps): React.ReactElement;
