import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Background, Bell, Mail, Pen, Phone } from '../components';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [name, setName] = useState('Крисанов Артём Борисович');
  const [mail, setMail] = useState('email@mail.ru');
  const [phone, setPhone] = useState('phone');

  useEffect(() => {
    setName(localStorage.getItem('name'));
    setMail(localStorage.getItem('email'));
    setPhone(localStorage.getItem('phone'));
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Тестовое задание. Главная страница</title>
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
          <Link href="/edit">
            <div className={styles.edit}>
              {'РЕДАКТИРОВАТЬ '}
              <Pen />
            </div>
          </Link>
        </div>
        <div className={styles.data}>
          <div className={styles.mail}>
            <Mail />
            {mail}
          </div>
          <div className={styles.phone}>
            <Phone />
            {phone}
          </div>
        </div>
      </main>
    </div>
  );
}
