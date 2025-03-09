import type { ITemplateDetailsParams } from "@typing/template";
import { EConfigName } from "@constants/index";
import UISettingComponents from "@components/UISettingComponents";

export const getUIByConfigName = (
  configName: EConfigName,
  onChange: (value: string, configName: EConfigName) => void,
  activeElementParams: ITemplateDetailsParams[0]
) => {
  const uiMap = {
    [EConfigName.COLOR]: (
      <UISettingComponents.Color
        value={activeElementParams?.[EConfigName.COLOR]}
        onChange={onChange}
      />
    ),
    [EConfigName.FONT_SIZE]: (
      <UISettingComponents.FontSize
        value={activeElementParams?.[EConfigName.FONT_SIZE]}
        onChange={onChange}
      />
    ),
    [EConfigName.FONT_WEIGHT]: (
      <UISettingComponents.FontWeight
        value={activeElementParams?.[EConfigName.FONT_WEIGHT]}
        onChange={onChange}
      />
    ),
    [EConfigName.CONTENT]: (
      <UISettingComponents.Content
        value={activeElementParams?.[EConfigName.CONTENT]}
        onChange={onChange}
      />
    ),
    [EConfigName.BACKGROUND_COLOR]: (
      <UISettingComponents.BackgroundColor
        value={activeElementParams?.[EConfigName.BACKGROUND_COLOR]}
        onChange={onChange}
      />
    ),
    [EConfigName.IMG_SRC]: (
      <UISettingComponents.ImageSource
        value={activeElementParams?.[EConfigName.IMG_SRC]}
        onChange={onChange}
      />
    ),
  };
  return uiMap[configName] || null;
};
