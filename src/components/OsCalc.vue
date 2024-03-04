<template>
  <section class="grid relative">
    <div
      :class="{ act: isAct }"
      class="absolute -top-8 duration-300 transition-all ease-out opacity-0 left-1/2 -translate-x-1/2 bg-other p-4 shadow-md rounded"
    >
      {{ operationErr }}
    </div>
    <transition name="backdrop">
      <div
        @click="closeHistory"
        v-if="historyAct"
        class="bg-black bg-opacity-50 absolute inset-0"
      ></div>
    </transition>
    <transition name="history">
      <ul
        class="absolute bg-bg w-[300px] h-full overflow-y-auto px-4 divide-y-2"
        v-if="historyAct"
      >
        <div class="bg-bg py-4 sticky top-0 w-full flex justify-between">
          <button
            class="bg-operation px-2 rounded-sm text-sm"
            @click="CleareHistorys"
          >
            Cleare Historys
          </button>
          <button @click="closeHistory">
            <baseIcon name="close" />
          </button>
        </div>
        <calc-historys
          v-for="history in historys"
          :key="history.id"
          :history-calc="history.calculation"
          :history-result="history.result"
        ></calc-historys>
      </ul>
    </transition>
    <div class="p-8 pb-0">
      <input
        ref="inputCalc"
        @keydown="handleKeyDown($event)"
        inputmode="none"
        type="text"
        v-model="input"
        class="w-full outline-none bg-transparent font-semibold text-3xl block text-right"
      />
      <div class="result my-5 text-right">{{ result }}</div>
      <div class="flex items-center justify-between pb-4 border-b">
        <button @click="openHistory">
          <baseIcon name="history" />
        </button>
        <button @click="deleteNum">
          <baseIcon name="delete" />
        </button>
      </div>
    </div>
    <div class="calc-btn grid gap-1 text-2xl">
      <button class="btn text-red-600" @click="cleareInput">C</button>
      <button class="btn" @click="toggleParentheses">( )</button>
      <button class="btn" @click="calcPercentage('%')">%</button>
      <button class="btn" @click="calcOperation('/')">
        <baseIcon name="divide" />
      </button>
      <button class="btn" @click="getNumber('7')">7</button>
      <button class="btn" @click="getNumber('8')">8</button>
      <button class="btn" @click="getNumber('9')">9</button>
      <button class="btn" @click="calcOperation('*')">X</button>
      <button class="btn" @click="getNumber('4')">4</button>
      <button class="btn" @click="getNumber('5')">5</button>
      <button class="btn" @click="getNumber('6')">6</button>
      <button class="btn" @click="calcOperation('-')">
        <baseIcon name="minus" />
      </button>
      <button class="btn" @click="getNumber('1')">1</button>
      <button class="btn" @click="getNumber('2')">2</button>
      <button class="btn" @click="getNumber('3')">3</button>
      <button class="btn" @click="calcOperation('+')">
        <baseIcon name="plus" />
      </button>
      <button class="btn" @click="setNegativeOrPositive">
        <baseIcon name="plus-minus" />
      </button>
      <button class="btn" @click="getNumber('0')">0</button>
      <button class="btn" @click="getDot('.')">
        <baseIcon name="dot" />
      </button>
      <button class="btn" @click="calculateResult">
        <baseIcon name="equal" />
      </button>
    </div>
  </section>
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted } from "vue";
import calcHistorys from "./calcHistorys";

const inputCalc = ref(null);
const input = ref("");
const result = ref("0");
const historys = ref([]);
const operationErr = ref("");
const isAct = ref(false);
const historyAct = ref(true);
let errorTimeout = null;

const openHistory = () => (historyAct.value = true);
const closeHistory = () => (historyAct.value = false);

const deleteNum = () => {
  input.value = input.value.slice(0, -1);
  inputCalc.value.focus();
};

const cleareInput = () => {
  input.value = "";
  result.value = "0";
  inputCalc.value.focus();
};

const toggleParentheses = () => {
  const lastChar = input.value.slice(-1);
  const isOpening = lastChar !== "(" && lastChar !== ")";
  const parenthesis = isOpening ? "(" : ")";

  const lastOpenParenIndex = input.value.lastIndexOf("(");
  const lastClosedParenIndex = input.value.lastIndexOf(")");
  const isOpenParenRecent = lastOpenParenIndex > lastClosedParenIndex;

  if (isOpening && isOpenParenRecent) {
    input.value += ")";
  } else {
    input.value += parenthesis;
  }

  inputCalc.value.focus();
};

const getDot = () => {
  const operations = ["+", "-", "*", "/"];
  if (input.value === "") input.value = "0.";
  // if (allowedKey.some((key) => input.value.includes(key))) {
  //   // input.value += "0.";
  // }

  // if (
  //   allowedKey.some((key) => input.value.includes(key)) &&
  //   input.value.slice(-1) === "1"
  // ) {
  //   input.value += ".";
  // }

  if (input.value.indexOf(".") === -1) {
    input.value += ".";
  }

  inputCalc.value.focus();
};

const setNegativeOrPositive = () => {
  input.value =
    input.value[0] === "-" ? input.value.slice(1) : `-${input.value}`;
  inputCalc.value.focus();
};

const getNumber = (num) => {
  input.value === "0" ? (input.value = num) : (input.value += num);
  inputCalc.value.focus();
};

const displayOperationError = () => {
  isAct.value = true;
  operationErr.value = "invalid format used";
  clearTimeout(errorTimeout);
  errorTimeout = setTimeout(() => (isAct.value = false), 2000);
};

const calcOperation = (operation) => {
  let filterOperation;
  inputCalc.value.focus();

  if (input.value === "") {
    displayOperationError();
    return;
  }

  if (
    input.value.slice(-1) !== "+" &&
    input.value.slice(-1) !== "-" &&
    input.value.slice(-1) !== "x" &&
    input.value.slice(-1) !== "/"
  ) {
    if (operation === "*") {
      filterOperation = "x";
    } else if (operation === "/") {
      filterOperation = "÷";
    } else {
      filterOperation = operation;
    }

    input.value += filterOperation;
  }
};

const handleKeyDown = (e) => {
  let keyPressed = e.key;
  const allowedKey = "+-*/.()%";

  if (keyPressed.includes("Enter")) calculateResult();

  if (
    !isNaN(keyPressed) ||
    allowedKey.includes(keyPressed) ||
    keyPressed === "Backspace"
  )
    return;

  e.preventDefault();
};

const calcPercentage = () => {
  result.value = parseFloat(input.value / 100);
};

const calculateResult = () => {
  inputCalc.value.focus();
  if (!input.value) return;

  try {
    const expression = input.value.replace(/x/g, "*").replace(/÷/g, "/");
    result.value = Function(`"use strict";return (${expression})`)();

    if (expression.includes("/0")) throw new Error("can't divide by zero");
  } catch (error) {
    result.value = error.message || "Invalid Expression";
  } finally {
    historys.value.unshift({
      calculation: input.value,
      result: result.value.toString(),
    });

    localStorage.setItem("historys", JSON.stringify(historys.value));
  }
};

const loadHistorys = async () => {
  if (localStorage.getItem("historys")) {
    historys.value = await JSON.parse(localStorage["historys"]);
  }
};

const CleareHistorys = () => {
  historys.value = [];
  localStorage.removeItem("historys");
};
onMounted(() => {
  inputCalc.value.focus();
  loadHistorys();
});
</script>

<style scoped>
section {
  min-height: 100svh;
  grid-template-rows: 3fr 7.2fr;
}
.calc-btn {
  grid-template-columns: repeat(4, 1fr);
}

.btn {
  @apply grid place-content-center bg-num;
}

.btn:nth-child(4n) {
  @apply bg-operation;
}

.btn:nth-child(-1n + 3) {
  @apply bg-other;
}

.act {
  @apply top-4 opacity-100;
}

.history-enter-active {
  animation: history 300ms ease-out;
}

ul::-webkit-scrollbar {
  @apply bg-other w-[5px];
}

ul::-webkit-scrollbar-thumb {
  @apply bg-num;
}

.history-leave-active {
  animation: history 300ms ease-in reverse;
}

@keyframes history {
  from {
    transform: translate(-300px);
    opacity: 0.5;
  }
  to {
    transform: translate(0);
    opacity: 1;
  }
}

.backdrop-enter-active {
  animation: backdrop 300ms ease-out;
}

.backdrop-leave-active {
  animation: backdrop 300ms ease-in reverse;
}

@keyframes backdrop {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
