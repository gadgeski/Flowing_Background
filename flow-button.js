/* カーソルの位置で変色 */
const btn = document.querySelector("#flow-button-js");
btn.addEventListener("mousemove", (e) => {
  const rect = btn.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  // カーソル位置の計算
  btn.style.backgroundPosition = `${x}% 0`;
  // 背景位置を動的に
});
btn.addEventListener("mouseleave", () => {
  btn.Style.backgroundPosition = "0% 0";
});
// マウスを離した時
