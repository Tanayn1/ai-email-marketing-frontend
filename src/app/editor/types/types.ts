import { WithoutPrivateActions } from "@craftjs/core";


export interface Options {
    actions: WithoutPrivateActions<null>,
    selected: {
        id: any;
        name: string;
        settings: React.ElementType<any, keyof React.JSX.IntrinsicElements>;
        isDeletable: boolean;
        props: Record<string, any>;
    } | undefined
    session_id?: string
}