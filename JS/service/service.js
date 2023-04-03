import { myTodoList } from "../myTodoList.js"

export class ToDoList {

    toDoListUpdated = myTodoList;
    addOneTaskInDom(array) {
        const divInbox = document.querySelector(".inbox");
        array.forEach((element) => {
            divInbox.innerHTML += `
            <div class="item">
                <input type="checkbox" class="chekbox">
                <p>${element}</p>
                <img src="img/delete.png">
            </div>
            `
        });
    }

    deleteOneTask() {
        const imgDelete = document.querySelectorAll(".item > img");
        imgDelete.forEach((img) => {
            img.addEventListener("click", (e) => {
                const thisImg = e.target;
                const pOfThisBox = thisImg.previousElementSibling.textContent;
                const newArray = this.toDoListUpdated.filter((element) => element !== pOfThisBox);
                this.toDoListUpdated = newArray;
                thisImg.parentElement.remove();
            })
        })
    }

    addCompletedTrueInServer(checkedTrue, paragraphUnderOfThisCheckBox) {
        this.toDoListUpdated.forEach((element, index) => {
            if (element == paragraphUnderOfThisCheckBox) {
                let completedTrue = element.replace(element, `${checkedTrue}`);
                this.toDoListUpdated[index] = completedTrue;
            }
        })
    }

    removeCompletedTrueInServer(checkedTrue, paragraphUnderOfThisCheckBox) {
        this.toDoListUpdated.forEach((element, index) => {
            const restoreInitialValue = element.replace(checkedTrue, `${paragraphUnderOfThisCheckBox}`);
            this.toDoListUpdated[index] = restoreInitialValue;

        })
    }

    strikeOutTheTask() {
        const checkboxList = document.querySelectorAll("input");
        let checkedTrue = "completed=true";
        checkboxList.forEach((checkbox) => {

            checkbox.addEventListener("change", (e) => {
                const thisBox = e.target;
                const paragraphUnderOfThisCheckBox = checkbox.nextElementSibling.textContent;
                if (thisBox.checked === true) {
                    thisBox.setAttribute('checked', true);
                    this.addCompletedTrueInServer(checkedTrue, paragraphUnderOfThisCheckBox);
                } else {
                    thisBox.setAttribute('checked', false);
                    this.removeCompletedTrueInServer(checkedTrue, paragraphUnderOfThisCheckBox)
                }
            })
        })
    }

    // addTask(array, text) {
    //     const newArray = array;
    //     newArray.push(text);
    //     return newArray;
    // }

    postOneTask() {
        const btn = document.getElementById("btn");
        btn.addEventListener("click", (e) => {
            let inputValue = document.getElementById("inputAdd").value;
            e.preventDefault();
            this.toDoListUpdated.push(inputValue);
            return this.toDoListUpdated;
        })
    }

}
