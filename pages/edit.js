import Head from 'next/head';
import {
  Background,
  Bell,
  Mail,
  Phone,
  Close,
  Avatar,
  InvalidMail,
  InvalidName,
  InvalidPhone,
} from '../components';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ValidateForm from '../functions/validateForm';
import PostData from '../functions/postData';

const Editor = () => {
  const [name, setName] = useState('Крисанов Артём Борисович');
  const [mail, setMail] = useState('email@mail.ru');
  const [phone, setPhone] = useState('phone');
  const [invalidName, setInvalidName] = useState(false);
  const [invalidMail, setInvalidMail] = useState(false);
  const [invalidPhone, setInvalidPhone] = useState(false);

  useEffect(() => {
    setName(localStorage.getItem('name'));
  }, []);

  return (
    <div>
      <Head>
        <title>Тестовое задание. Редактор</title>
        <link rel="icon" href="/favicon.ico" />
        <Background />
      </Head>
      <main>
        <div className={styles.header_1}>ЛИЧНЫЙ ПРОФИЛЬ</div>
        <div className={styles.header_2}>Главная/Личный профиль</div>
        <div className={styles.bell}>
          <Bell />
        </div>
        <div className={styles.line}></div>
        <img
          src="http://www.mistercar.ru/wp-content/uploads/2017/12/avatar-zero-grey-8c99a9.png"
          alt="Картинка"
          className={styles.avatar_in_head}></img>
        <div className={styles.name_in_head}>
          {name.split(' ')[0] + ' '}
          {name.split(' ')[1] ? <div>{name.split(' ')[1][0] + '.'}</div> : undefined}
        </div>
        <div className={styles.profile}>
          <img
            src="http://www.mistercar.ru/wp-content/uploads/2017/12/avatar-zero-grey-8c99a9.png"
            alt="Фото"
            className={styles.avatar}></img>
          <div className={styles.full_name}>{name}</div>
          <Link href="/">
            <div className={styles.edit}>
              {'ЗАКРЫТЬ '}
              <Close />
            </div>
          </Link>
        </div>
        <div className={styles.editor}>
          <div className={styles.avatar_edit}>
            <Avatar />
          </div>
          <fieldset className={styles.input_field}>
            <legend>Фамилия и имя</legend>
            <input
              placeholder="Укажите вашу фамилию и имя"
              className={styles.input}
              id="name"></input>
          </fieldset>
          {invalidName ? (
            <div className={styles.invalid_name}>
              <InvalidName />
            </div>
          ) : undefined}
          <div className={styles.mail_edit}>
            <Mail />
          </div>
          <fieldset className={styles.input_field}>
            <legend>Email</legend>
            <input placeholder="Укажите email" className={styles.input} id="email"></input>
          </fieldset>
          {invalidMail ? (
            <div className={styles.invalid_mail}>
              <InvalidMail />
            </div>
          ) : undefined}
          <div className={styles.phone_edit}>
            <Phone />
          </div>
          <fieldset className={styles.input_field}>
            <legend>Phone</legend>
            <input placeholder="Phone" className={styles.input} id="phone"></input>
          </fieldset>
          {invalidPhone ? (
            <div className={styles.invalid_phone}>
              <InvalidPhone />
            </div>
          ) : undefined}
          <button
            className={styles.button}
            onClick={() => {
              if (ValidateForm('name', document.getElementById('name').value) !== null) {
                localStorage.setItem('name', document.getElementById('name').value);
                setInvalidName(false);
                setName(document.getElementById('name').value);
              } else {
                setInvalidName(true);
              }
              if (ValidateForm('email', document.getElementById('email').value) !== null) {
                localStorage.setItem('email', document.getElementById('email').value);
                setInvalidMail(false);
                setMail(localStorage.getItem('mail'));
              } else {
                setInvalidMail(true);
              }
              if (ValidateForm('phone', document.getElementById('phone').value) !== null) {
                localStorage.setItem('phone', document.getElementById('phone').value);
                setInvalidPhone(false);
                setPhone(localStorage.getItem('phone'));
              } else {
                setInvalidPhone(true);
              }
              PostData(name, mail, phone);
            }}>
            Сохранить Изменения
          </button>
        </div>
      </main>
    </div>
  );
};

export default Editor;
