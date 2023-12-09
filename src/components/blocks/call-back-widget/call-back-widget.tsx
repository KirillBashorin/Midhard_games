import { useState, useEffect } from 'react';
import {
  WidgetButton,
  StyledPhone,
  WidgetPopup,
  FormTitle,
  StyledForm,
  StyledFieldset,
  BottomText,
  PhoneNumber,
} from './styled';
import Input from '../../ui/input/input';
import Button from '../../ui/button/button';
import axios from 'axios';
import OutsideClickHandler from 'react-outside-click-handler';
import Preloader from '../../ui/preloader/preloader';
import { useTranslation } from 'react-i18next';

const CallbackWidget: React.FC = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isFormSuccessSend, setIsformSuccessSend] = useState(false);
  const [isShowPreloader, setIsShowPreloader] = useState(false);
  const [phone, setPhone] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState<boolean | null>(null);
  const [isValidateStarted, setIsValidateStarted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (phone.length >= 4) {
      setIsPhoneValid(true);
    } else {
      setIsPhoneValid(false);
    }
  }, [phone]);

  interface IonChange {
    (
      evt: React.ChangeEvent<HTMLInputElement>,
      setChange: (value: string) => void
    ): void;
  }

  const onChange: IonChange = (evt, setChange) => {
    setChange(evt.target.value);
  };

  const handlePopupToggle = () => {
    setIsPopupOpened(!isPopupOpened);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url =
      'https://script.google.com/macros/s/AKfycbxsrGcgP8OrfxNaW1gjTu4IOWEUezfCg4oqoi5ExMbwAXkde7WBPKRMDDmlkJd2qDn5/exec';

    if (isPhoneValid) {
      try {
        setIsShowPreloader(true);
        const response = await axios.get(`${url}?phone=${phone}`);
        const responseData = await response.data;
        if (responseData.status === 'ok') {
          setIsformSuccessSend(!isFormSuccessSend);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsShowPreloader(false);
      }
    } else {
      setIsValidateStarted(true);
    }
  };

  return (
    <div>
      <WidgetButton onClick={handlePopupToggle}>
        <StyledPhone />
      </WidgetButton>
      <OutsideClickHandler onOutsideClick={() => setIsPopupOpened(false)}>
        <WidgetPopup
          $isPopupOpened={isPopupOpened}
          handlePopupToggle={handlePopupToggle}
        >
          <FormTitle>
            {isFormSuccessSend
              ? t('callback_widget.alert')
              : t('callback_widget.title')}
          </FormTitle>
          {isFormSuccessSend ? (
            <Button
              onClick={() => {
                setIsPopupOpened(!isPopupOpened);
              }}
            >
              {t('callback_widget.button_close')}
            </Button>
          ) : (
            <>
              <StyledForm onSubmit={handleSubmit}>
                <StyledFieldset>
                  <Input
                    name={'phone'}
                    type={'text'}
                    placeholder={t('callback_widget.phone')}
                    onChange={(evt) => onChange(evt, setPhone)}
                    {...(isValidateStarted ? { $isValid: isPhoneValid } : {})}
                  />
                </StyledFieldset>
                <Button type={'submit'} disabled={isShowPreloader}>
                  {isShowPreloader ? (
                    <Preloader />
                  ) : (
                    t('callback_widget.button_submit')
                  )}
                </Button>
              </StyledForm>
              <BottomText>{t('callback_widget.bottom_text')}</BottomText>
              <PhoneNumber link={'tel:+79875887842'}>
                +7 (987) 588-78-42
              </PhoneNumber>
            </>
          )}
        </WidgetPopup>
      </OutsideClickHandler>
    </div>
  );
};

export default CallbackWidget;
