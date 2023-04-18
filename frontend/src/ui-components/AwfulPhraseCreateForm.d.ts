/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AwfulPhraseCreateFormInputValues = {
    phrase?: string;
};
export declare type AwfulPhraseCreateFormValidationValues = {
    phrase?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AwfulPhraseCreateFormOverridesProps = {
    AwfulPhraseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    phrase?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AwfulPhraseCreateFormProps = React.PropsWithChildren<{
    overrides?: AwfulPhraseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AwfulPhraseCreateFormInputValues) => AwfulPhraseCreateFormInputValues;
    onSuccess?: (fields: AwfulPhraseCreateFormInputValues) => void;
    onError?: (fields: AwfulPhraseCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AwfulPhraseCreateFormInputValues) => AwfulPhraseCreateFormInputValues;
    onValidate?: AwfulPhraseCreateFormValidationValues;
} & React.CSSProperties>;
export default function AwfulPhraseCreateForm(props: AwfulPhraseCreateFormProps): React.ReactElement;
