

const options = document.querySelectorAll("#poll-options li");

// 獲取投票選項列表元素
const pollOptions = document.getElementById("poll-options");

// 遍歷選項列表，並為每個選項的刪除按鈕添加點擊事件監聽器
options.forEach(function (option) {
    const deleteButton = option.querySelector(".delete-option-button");
    deleteButton.addEventListener("click", function (e) {
        // 獲取該刪除按鈕所在的選項元素，並從列表中刪除該選項元素
        const optionToDelete = e.target.parentElement;
        pollOptions.removeChild(optionToDelete);
    });
});


// 獲取添加選項按鈕和輸入框元素
const addOptionButton = document.getElementById("add-option-button");
const newOptionInput = document.getElementById("new-option-input");

// 為添加選項按鈕添加點擊事件監聽器
addOptionButton.addEventListener("click", function (e) {
    // 獲取輸入框中的午餐名稱
    const newOption = newOptionInput.value;

    // 如果午餐名稱不為空，則添加新選項
    if (newOption) {
        // 獲取投票選項列表元素
        const pollOptions = document.getElementById("poll-options");

        // 創建新的選項元素
        const newOptionElement = document.createElement("li");
        newOptionElement.innerHTML = `
    <input type="radio" name="poll-option" id="option-${newOption}" value="${newOption}" />
    <label for="option-${newOption}">${newOption}</label>
    <button class="delete-option-button">刪除</button>`;

        // 為刪除按鈕添加點擊事件監聽器
        const deleteButton = newOptionElement.querySelector(".delete-option-button");
        deleteButton.addEventListener("click", function (e) {
            // 獲取該刪除按鈕所在的選項元素，並從列表中刪除該選項元素
            const optionToDelete = e.target.parentElement;
            pollOptions.removeChild(optionToDelete);
        });

        // 將新選項元素添加到選項列表中
        pollOptions.appendChild(newOptionElement);

        // 清空輸入框
        newOptionInput.value = "";
    }
});



