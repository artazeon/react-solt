import './contacts.scss'

export default function ContactsPage() {
  return (
    <section className='contacts-page'>
      <div className='container'>
        <h1>Контакты</h1>

        <p className='contacts-intro'>
          Наши специалисты проводят консультации очно в Москве и онлайн. Если
          вам нужна помощь в подборе специалиста или вы хотите задать вопрос —
          напишите нам, и мы свяжемся с вами в ближайшее время.
        </p>

        <div className='contacts-grid'>
          {/* Левая колонка */}
          <div className='contacts-info'>
            <h2>Контактная информация</h2>

            <div className='contact-card'>
              <h4>Телефон</h4>
              <a href='tel:+79991234567'>+7 (999) 123-45-67</a>
            </div>

            <div className='contact-card'>
              <h4>E-mail</h4>
              <a href='mailto:info@psycenter.ru'>info@psycenter.ru</a>
            </div>

            <div className='contact-card'>
              <h4>Адрес</h4>
              <p>г. Москва, ул. Примерная, 12</p>
            </div>

            <div className='contact-card'>
              <h4>Режим работы</h4>
              <p>Пн–Вс: 10:00–21:00</p>
            </div>
          </div>

          {/* Правая колонка */}
          <div className='contacts-form'>
            <h2>Задать вопрос</h2>

            <form>
              <input type='text' placeholder='Ваше имя *' required />
              <input type='tel' placeholder='Ваш телефон *' required />
              <input type='email' placeholder='Ваш Email' />
              <textarea placeholder='Комментарий *' required></textarea>

              <button type='submit' className='btn btn--primary'>
                Отправить
              </button>
            </form>
          </div>
        </div>

        {/* Карта */}
        <div className='contacts-map'>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <iframe
              src='https://yandex.by/map-widget/v1/?ll=37.679923%2C55.756236&mode=whatshere&whatshere%5Bpoint%5D=37.652348%2C55.749995&whatshere%5Bzoom%5D=13.54&z=13.54'
              width='100%'
              height='450'
              frameBorder='0'
              allowFullScreen
              style={{ position: 'relative' }}
            />
          </div>
        </div>

        {/* Реквизиты */}
        <div className='contacts-requisites'>
          <h2>Реквизиты</h2>
          <p>ООО «Психологический центр Баланс»</p>
          <p>ОГРН 1234567890123</p>
          <p>ИНН 7700000000</p>
          <p>Банк: ПАО «Сбербанк»</p>
          <p>р/с 40702810000000000000</p>
          <p>к/с 30101810400000000225</p>
          <p>БИК 044525225</p>
        </div>
      </div>
    </section>
  )
}
