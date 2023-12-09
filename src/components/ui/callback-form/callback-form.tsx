import { useState, useEffect } from 'react';
import {
  StyledForm,
  StyledFieldset,
  Privacy,
  PrivacyLink,
  AlertText,
} from './styled';
import Input from '../../ui/input/input';
import Button from '../../ui/button/button';
import axios from 'axios';
import Popup from '../../ui/popup/popup';
import OutsideClickHandler from 'react-outside-click-handler';
import Preloader from '../preloader/preloader';
import { useTranslation } from 'react-i18next';

interface ICallbackForm {
  $isAlertInPopup?: boolean;
  closePopupContainer?: () => void;
  activeLanguage: string;
}

const CallbackForm: React.FC<ICallbackForm> = ({
  $isAlertInPopup,
  closePopupContainer,
  activeLanguage,
}) => {
  const [isFormSuccessSend, setIsformSuccessSend] = useState(false);
  const [isAlertOpened, setIsAlertOpened] = useState(false);
  const [isShowPreloader, setIsShowPreloader] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isNameValid, setIsNameValid] = useState<boolean | null>(null);
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
  const [isValidateStarted, setIsValidateStarted] = useState(false);
  const { t } = useTranslation();
  const isEn = activeLanguage === 'en';

  useEffect(() => {
    if (email.length >= 4) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }

    if (name.length >= 2) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
  }, [name, email]);

  interface IonChange {
    (
      evt: React.ChangeEvent<HTMLInputElement>,
      setChange: (value: string) => void
    ): void;
  }

  const onChange: IonChange = (evt, setChange) => {
    setChange(evt.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url =
      'https://script.google.com/macros/s/AKfycbxsrGcgP8OrfxNaW1gjTu4IOWEUezfCg4oqoi5ExMbwAXkde7WBPKRMDDmlkJd2qDn5/exec';

    if (isNameValid && isEmailValid) {
      try {
        setIsShowPreloader(true);
        const response = await axios.get(`${url}?name=${name}&email=${email}`);
        const responseData = await response.data;
        if (responseData.status === 'ok') {
          setIsformSuccessSend(!isFormSuccessSend);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsShowPreloader(false);
        setIsAlertOpened(!isAlertOpened);
      }
    } else {
      setIsValidateStarted(true);
    }
  };
  console.log(name);
  return (
    <StyledForm onSubmit={handleSubmit}>
      {$isAlertInPopup ? (
        <>
          <StyledFieldset>
            <Input
              placeholder={t('callback_form.name')}
              name={'name'}
              onChange={(evt) => onChange(evt, setName)}
              {...(isValidateStarted ? { $isValid: isNameValid } : {})}
            />
            <Input
              placeholder={t('callback_form.email')}
              name={'email'}
              onChange={(evt) => onChange(evt, setEmail)}
              {...(isValidateStarted ? { $isValid: isEmailValid } : {})}
            />
          </StyledFieldset>
          <Privacy>
            {t('callback_form.privacy_text')}
            <PrivacyLink to={isEn ? '/privacy' : '/privacy/ru'}>
              {t('callback_form.privacy_link')}
            </PrivacyLink>
          </Privacy>
          <Button type={'submit'} disabled={isShowPreloader}>
            {isShowPreloader ? <Preloader /> : t('callback_form.button_submit')}
          </Button>
          <OutsideClickHandler onOutsideClick={() => setIsAlertOpened(false)}>
            <Popup
              $isPopupOpened={isAlertOpened}
              handlePopupToggle={() => setIsAlertOpened(!isAlertOpened)}
            >
              <AlertText>{t('callback_form.alert')}</AlertText>
              <Button onClick={() => setIsAlertOpened(!isAlertOpened)}>
                {t('callback_form.button_close')}
              </Button>
            </Popup>
          </OutsideClickHandler>
        </>
      ) : (
        <>
          {isAlertOpened ? (
            <>
              <AlertText>{t('callback_form.alert')}</AlertText>
              <Button onClick={closePopupContainer}>
                {t('callback_form.button_close')}
              </Button>
            </>
          ) : (
            <>
              <StyledFieldset>
                <Input
                  placeholder={t('callback_form.name')}
                  name={'name'}
                  onChange={(evt) => onChange(evt, setName)}
                  {...(isValidateStarted ? { $isValid: isNameValid } : {})}
                />
                <Input
                  placeholder={t('callback_form.email')}
                  name={'email'}
                  onChange={(evt) => onChange(evt, setEmail)}
                  {...(isValidateStarted ? { $isValid: isEmailValid } : {})}
                />
              </StyledFieldset>
              <Privacy>
                {t('callback_form.privacy_text')}
                <PrivacyLink to={isEn ? '/privacy' : '/privacy/ru'}>
                  {t('callback_form.privacy_link')}
                </PrivacyLink>
              </Privacy>
              <Button type={'submit'} disabled={isShowPreloader}>
                {isShowPreloader ? (
                  <Preloader />
                ) : (
                  t('callback_form.button_submit')
                )}
              </Button>
            </>
          )}
        </>
      )}
    </StyledForm>
  );
};

export default CallbackForm;
