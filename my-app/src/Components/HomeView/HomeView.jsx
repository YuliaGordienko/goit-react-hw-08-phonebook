import s from "./HomeView.module.css";
export default function HomeView() {
  return (
    <div>
      <h1 className={s.title}>
        We are glad to see you, dear friend! Not once was here? Please, log in!
        First time here? Sigh up, will be great!
      </h1>
    </div>
  );
}
