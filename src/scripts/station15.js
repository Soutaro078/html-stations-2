function displayList() {
    // 元の要素を取り出す
    const fruitsDiv = document.getElementById("fruits");
    const fruitItems = document.getElementsByTagName('p');
    // 新しい要素ulを作成する
    const ul = document.createElement('ul');

    //リスト表示に変換する
    Array.from(fruitItems).forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.textContent;
        ul.appendChild(li);
    });

    // 元の要素を削除して、新しい要素を追加する
    fruitsDiv.innerHTML = '';
    fruitsDiv.appendChild(ul);
}