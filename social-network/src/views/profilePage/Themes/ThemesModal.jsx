import React, { useState } from 'react';
import { Button } from '../../../components/Button/Button';
import { ContentBox } from '../../../components/ContentBox/ContentBox';
import { themes } from './themes';
import style from './Themes.module.scss';

export const ThemesModal = (props) => {
  const [selectTheme, setSelectTheme] = useState(props.theme);
  const themeItem = themes.map((i) => {
    const className =
      style.themeItemContainer +
      ' ' +
      (selectTheme.src === i.src ? style.activeTheme : '');
    return (
      <div className={className} onClick={() => setSelectTheme(i)}>
        <img className={style.imgTheme} src={i.src} alt={i.alt} />
      </div>
    );
  });
  return (
    <div className={style.wrapper}>
      <ContentBox className={style.window}>
        <div className={style.button} onClick={props.onClose}>
          <Button styleType="close" />
        </div>
        <div className={style.themesItemsContainer}>{themeItem}</div>
        <div className={style.button}>
          <Button
            styleType="save"
            onClick={() => {
              props.save(selectTheme);
              props.onClose();
            }}
          >
            Save
          </Button>
        </div>
      </ContentBox>
    </div>
  );
};
