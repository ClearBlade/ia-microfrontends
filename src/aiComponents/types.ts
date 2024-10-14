import { AssetType } from "@clearblade/ia-mfe-core";

export type AiComponentsProps = {
  schema: Record<string, unknown>[];
  componentMeta: Record<string, unknown>;
  componentName: string;
  assetTypeName: string;
  setValues: React.Dispatch<
    React.SetStateAction<{
      schema: Record<string, unknown>[];
      componentsMeta?: Record<string, unknown>;
    }>
  >
};
