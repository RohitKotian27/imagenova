export default function LoadingBar({ loading }) {
  return (
    <div>
      <div className={loading ? "loading-bar-full" : "loading-bar"}>&nbsp;</div>
      <div className={loading ? "visible" : "invisible"}>Loading...</div>
    </div>
  );
}
