/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AwfulPhrase } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AwfulPhraseUpdateFormInputValues = {
    phrase?: string;
};
export declare type AwfulPhraseUpdateFormValidationValues = {
    phrase?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AwfulPhraseUpdateFormOverridesProps = {
    AwfulPhraseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    phrase?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AwfulPhraseUpdateFormProps = React.PropsWithChildren<{
    overrides?: AwfulPhraseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    awfulPhrase?: AwfulPhrase;
    onSubmit?: (fields: AwfulPhraseUpdateFormInputValues) => AwfulPhraseUpdateFormInputValues;
    onSuccess?: (fields: AwfulPhraseUpdateFormInputValues) => void;
    onError?: (fields: AwfulPhraseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AwfulPhraseUpdateFormInputValues) => AwfulPhraseUpdateFormInputValues;
    onValidate?: AwfulPhraseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AwfulPhraseUpdateForm(props: AwfulPhraseUpdateFormProps): React.ReactElement;
