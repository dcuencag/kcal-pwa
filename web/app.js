const STORAGE_KEY = "kcal.entries.v2";
const LEGACY_STORAGE_KEY = "kcal.entries.v1";
const SETTINGS_KEY = "kcal.settings.v1";
const CUSTOM_FOODS_KEY = "kcal.customFoods.v1";
const FAVORITE_FOODS_KEY = "kcal.favoriteFoods.v1";

const FOODS = [
  { name: "Arroz blanco cocido", calories: 130, protein: 2.7, carbs: 28.2, fat: 0.3 },
  { name: "Arroz blanco crudo", calories: 365, protein: 7.1, carbs: 80, fat: 0.7 },
  { name: "Pasta cocida", calories: 158, protein: 5.8, carbs: 30.9, fat: 0.9 },
  { name: "Pasta cruda", calories: 371, protein: 13, carbs: 75, fat: 1.5 },
  { name: "Pan blanco", calories: 265, protein: 9, carbs: 49, fat: 3.2 },
  { name: "Pan integral", calories: 247, protein: 13, carbs: 41, fat: 4.2 },
  { name: "Avena", calories: 389, protein: 16.9, carbs: 66.3, fat: 6.9 },
  { name: "Patata cocida", calories: 87, protein: 1.9, carbs: 20.1, fat: 0.1 },
  { name: "Boniato cocido", calories: 90, protein: 2, carbs: 20.7, fat: 0.2 },
  { name: "Pollo pechuga cocida", calories: 165, protein: 31, carbs: 0, fat: 3.6 },
  { name: "Pavo pechuga", calories: 135, protein: 29, carbs: 0, fat: 1.7 },
  { name: "Ternera magra", calories: 217, protein: 26.1, carbs: 0, fat: 11.8 },
  { name: "Cerdo lomo", calories: 242, protein: 27.3, carbs: 0, fat: 14 },
  { name: "Huevo", calories: 143, protein: 12.6, carbs: 0.7, fat: 9.5 },
  { name: "Clara de huevo", calories: 52, protein: 10.9, carbs: 0.7, fat: 0.2 },
  { name: "Atun al natural", calories: 116, protein: 25.5, carbs: 0, fat: 0.8 },
  { name: "Salmon", calories: 208, protein: 20.4, carbs: 0, fat: 13.4 },
  { name: "Merluza", calories: 82, protein: 17, carbs: 0, fat: 1.2 },
  { name: "Garbanzos cocidos", calories: 164, protein: 8.9, carbs: 27.4, fat: 2.6 },
  { name: "Lentejas cocidas", calories: 116, protein: 9, carbs: 20.1, fat: 0.4 },
  { name: "Alubias cocidas", calories: 127, protein: 8.7, carbs: 22.8, fat: 0.5 },
  { name: "Leche entera", calories: 61, protein: 3.2, carbs: 4.8, fat: 3.3 },
  { name: "Leche semidesnatada", calories: 47, protein: 3.3, carbs: 4.8, fat: 1.6 },
  { name: "Yogur natural", calories: 61, protein: 3.5, carbs: 4.7, fat: 3.3 },
  { name: "Yogur griego natural", calories: 97, protein: 9, carbs: 3.6, fat: 5 },
  { name: "Queso fresco batido 0%", calories: 46, protein: 8.5, carbs: 3.5, fat: 0.2 },
  { name: "Queso curado", calories: 402, protein: 25, carbs: 1.3, fat: 33 },
  { name: "Aceite de oliva", calories: 884, protein: 0, carbs: 0, fat: 100 },
  { name: "Aguacate", calories: 160, protein: 2, carbs: 8.5, fat: 14.7 },
  { name: "Almendras", calories: 579, protein: 21.2, carbs: 21.6, fat: 49.9 },
  { name: "Nueces", calories: 654, protein: 15.2, carbs: 13.7, fat: 65.2 },
  { name: "Platano", calories: 89, protein: 1.1, carbs: 22.8, fat: 0.3 },
  { name: "Manzana", calories: 52, protein: 0.3, carbs: 13.8, fat: 0.2 },
  { name: "Naranja", calories: 47, protein: 0.9, carbs: 11.8, fat: 0.1 },
  { name: "Fresas", calories: 32, protein: 0.7, carbs: 7.7, fat: 0.3 },
  { name: "Tomate", calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2 },
  { name: "Brocoli", calories: 34, protein: 2.8, carbs: 6.6, fat: 0.4 },
  { name: "Lechuga", calories: 15, protein: 1.4, carbs: 2.9, fat: 0.2 },
  { name: "Zanahoria", calories: 41, protein: 0.9, carbs: 9.6, fat: 0.2 },
  { name: "Chocolate negro 85%", calories: 598, protein: 7.8, carbs: 19, fat: 52 },
  { name: "Proteina whey", calories: 390, protein: 78, carbs: 8, fat: 6 }
];

const EMBEDDED_FOODS = window.BASE_FOODS_ES ?? FOODS;

const state = {
  entries: loadEntries(),
  settings: loadSettings(),
  customFoods: loadCustomFoods(),
  favoriteFoodKeys: loadFavoriteFoodKeys(),
  foodResults: [],
  selectedFood: null
};

state.foodResults = allFoods();

const elements = {
  todayLabel: document.querySelector("#todayLabel"),
  totalCalories: document.querySelector("#totalCalories"),
  remainingCalories: document.querySelector("#remainingCalories"),
  totalProtein: document.querySelector("#totalProtein"),
  remainingProtein: document.querySelector("#remainingProtein"),
  proteinRing: document.querySelector("#proteinRing"),
  totalCarbs: document.querySelector("#totalCarbs"),
  totalFat: document.querySelector("#totalFat"),
  goalRing: document.querySelector("#goalRing"),
  entryForm: document.querySelector("#entryForm"),
  foodInput: document.querySelector("#foodInput"),
  favoriteFoodsSection: document.querySelector("#favoriteFoodsSection"),
  favoriteFoods: document.querySelector("#favoriteFoods"),
  foodSuggestions: document.querySelector("#foodSuggestions"),
  gramsInput: document.querySelector("#gramsInput"),
  noteInput: document.querySelector("#noteInput"),
  previewCalories: document.querySelector("#previewCalories"),
  previewProtein: document.querySelector("#previewProtein"),
  previewCarbs: document.querySelector("#previewCarbs"),
  previewFat: document.querySelector("#previewFat"),
  foodHint: document.querySelector("#foodHint"),
  saveEntryButton: document.querySelector("#saveEntryButton"),
  entryList: document.querySelector("#entryList"),
  emptyState: document.querySelector("#emptyState"),
  clearDayButton: document.querySelector("#clearDayButton"),
  settingsButton: document.querySelector("#settingsButton"),
  settingsDialog: document.querySelector("#settingsDialog"),
  goalInput: document.querySelector("#goalInput"),
  proteinGoalInput: document.querySelector("#proteinGoalInput"),
  saveSettingsButton: document.querySelector("#saveSettingsButton"),
  customFoodNameInput: document.querySelector("#customFoodNameInput"),
  customFoodCaloriesInput: document.querySelector("#customFoodCaloriesInput"),
  customFoodProteinInput: document.querySelector("#customFoodProteinInput"),
  customFoodCarbsInput: document.querySelector("#customFoodCarbsInput"),
  customFoodFatInput: document.querySelector("#customFoodFatInput"),
  saveCustomFoodButton: document.querySelector("#saveCustomFoodButton"),
  customFoodList: document.querySelector("#customFoodList")
};

init();

function init() {
  elements.todayLabel.textContent = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "short"
  }).format(new Date());

  elements.entryForm.addEventListener("submit", handleSubmit);
  elements.foodInput.addEventListener("input", () => {
    state.selectedFood = null;
    renderFoodSuggestions();
    renderPreview();
  });
  elements.foodInput.addEventListener("focus", renderFoodSuggestions);
  elements.gramsInput.addEventListener("input", renderPreview);
  elements.clearDayButton.addEventListener("click", clearToday);
  elements.settingsButton.addEventListener("click", openSettings);
  elements.saveSettingsButton.addEventListener("click", saveSettings);
  elements.saveCustomFoodButton.addEventListener("click", saveCustomFood);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }

  render();
  renderFavoriteFoods();
  renderFoodSuggestions();
  renderPreview();
  updateFoodHint();
}

function renderFoodSuggestions() {
  const query = normalize(elements.foodInput.value);
  const matches = state.foodResults
    .filter((food) => !query || normalize(food.name).includes(query))
    .sort((a, b) => Number(isFavorite(b)) - Number(isFavorite(a)) || a.name.localeCompare(b.name, "es"))
    .slice(0, 20);

  const fragment = document.createDocumentFragment();

  matches.forEach((food) => {
    const row = document.createElement("div");
    row.className = "food-suggestion-row";

    const button = document.createElement("button");
    button.className = "food-suggestion";
    button.type = "button";

    const name = document.createElement("strong");
    name.textContent = food.name;

    const meta = document.createElement("span");
    meta.textContent = food.source === "propio"
      ? `${formatNumber(food.calories)} kcal/100g · propio`
      : `${formatNumber(food.calories)} kcal/100g`;

    button.append(name, meta);
    button.addEventListener("click", () => {
      state.selectedFood = food;
      elements.foodInput.value = food.name;
      if (!elements.gramsInput.value) {
        elements.gramsInput.value = "100";
      }
      renderFoodSuggestions();
      renderPreview();
      elements.gramsInput.focus();
    });

    const favoriteButton = document.createElement("button");
    favoriteButton.className = `favorite-toggle${isFavorite(food) ? " is-active" : ""}`;
    favoriteButton.type = "button";
    favoriteButton.setAttribute("aria-label", isFavorite(food) ? "Quitar de favoritos" : "Anadir a favoritos");
    favoriteButton.textContent = isFavorite(food) ? "★" : "☆";
    favoriteButton.addEventListener("click", () => toggleFavorite(food));

    row.append(button, favoriteButton);
    fragment.append(row);
  });

  elements.foodSuggestions.replaceChildren(fragment);
}

function renderFavoriteFoods() {
  const favorites = state.foodResults.filter((food) => isFavorite(food));
  elements.favoriteFoodsSection.hidden = false;
  elements.favoriteFoods.replaceChildren();

  if (favorites.length === 0) {
    const empty = document.createElement("p");
    empty.className = "favorite-empty";
    empty.textContent = "Sin favoritos";
    elements.favoriteFoods.append(empty);
    return;
  }

  favorites.forEach((food) => {
    const button = document.createElement("button");
    button.className = "favorite-food";
    button.type = "button";
    button.textContent = food.name;
    button.addEventListener("click", () => {
      state.selectedFood = food;
      elements.foodInput.value = food.name;
      if (!elements.gramsInput.value) {
        elements.gramsInput.value = "100";
      }
      renderFoodSuggestions();
      renderPreview();
      elements.gramsInput.focus();
    });
    elements.favoriteFoods.append(button);
  });
}

function handleSubmit(event) {
  event.preventDefault();

  const food = selectedFood();
  const grams = parseNumber(elements.gramsInput.value);

  if (!food) {
    elements.foodInput.focus();
    renderPreview();
    return;
  }

  if (!grams || grams <= 0) {
    elements.gramsInput.focus();
    renderPreview();
    return;
  }

  const nutrition = calculateNutrition(food, grams);

  state.entries.push({
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    foodName: food.name,
    grams,
    calories: nutrition.calories,
    protein: nutrition.protein,
    carbs: nutrition.carbs,
    fat: nutrition.fat,
    note: elements.noteInput.value.trim()
  });

  saveEntries();
  elements.entryForm.reset();
  elements.foodInput.focus();
  render();
  renderFoodSuggestions();
  renderPreview();
}

function openSettings() {
  elements.goalInput.value = String(state.settings.dailyGoal);
  elements.proteinGoalInput.value = String(state.settings.proteinGoal);
  renderCustomFoods();
  elements.settingsDialog.showModal();
}

function saveSettings() {
  const dailyGoal = parseNumber(elements.goalInput.value);
  const proteinGoal = parseNumber(elements.proteinGoalInput.value);

  if (dailyGoal && dailyGoal > 0) {
    state.settings.dailyGoal = Math.round(dailyGoal);
  }

  if (proteinGoal && proteinGoal > 0) {
    state.settings.proteinGoal = Math.round(proteinGoal);
  }

  localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
  elements.settingsDialog.close();
  render();
}

function saveCustomFood() {
  const name = elements.customFoodNameInput.value.trim();
  const calories = parseNumber(elements.customFoodCaloriesInput.value);
  const protein = parseNumber(elements.customFoodProteinInput.value);
  const carbs = parseNumber(elements.customFoodCarbsInput.value);
  const fat = parseNumber(elements.customFoodFatInput.value);

  if (!name || calories <= 0 || protein < 0 || carbs < 0 || fat < 0) {
    elements.customFoodNameInput.focus();
    return;
  }

  const food = { name, calories, protein, carbs, fat, source: "propio" };
  const foodKey = getFoodKey(food);

  state.customFoods = [
    food,
    ...state.customFoods.filter((item) => getFoodKey(item) !== foodKey)
  ].sort((a, b) => a.name.localeCompare(b.name, "es"));

  saveCustomFoods();
  state.foodResults = allFoods();
  elements.customFoodNameInput.value = "";
  elements.customFoodCaloriesInput.value = "";
  elements.customFoodProteinInput.value = "";
  elements.customFoodCarbsInput.value = "";
  elements.customFoodFatInput.value = "";
  renderCustomFoods();
  renderFavoriteFoods();
  renderFoodSuggestions();
  renderPreview();
}

function renderCustomFoods() {
  elements.customFoodList.replaceChildren();

  if (state.customFoods.length === 0) {
    const empty = document.createElement("p");
    empty.className = "custom-food-empty";
    empty.textContent = "Aun no has anadido alimentos propios.";
    elements.customFoodList.append(empty);
    return;
  }

  state.customFoods.forEach((food) => {
    const row = document.createElement("div");
    row.className = "custom-food-item";

    const copy = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = food.name;
    const meta = document.createElement("span");
    meta.textContent = `${formatNumber(food.calories)} kcal · ${formatNumber(food.protein)}P ${formatNumber(food.carbs)}C ${formatNumber(food.fat)}G`;
    copy.append(name, meta);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.setAttribute("aria-label", "Borrar alimento propio");
    deleteButton.textContent = "x";
    deleteButton.addEventListener("click", () => deleteCustomFood(food));

    row.append(copy, deleteButton);
    elements.customFoodList.append(row);
  });
}

function deleteCustomFood(food) {
  const foodKey = getFoodKey(food);
  state.customFoods = state.customFoods.filter((item) => getFoodKey(item) !== foodKey);
  state.favoriteFoodKeys = state.favoriteFoodKeys.filter((key) => key !== foodKey);
  if (state.selectedFood && getFoodKey(state.selectedFood) === foodKey) {
    state.selectedFood = null;
  }
  saveCustomFoods();
  saveFavoriteFoodKeys();
  state.foodResults = allFoods();
  renderCustomFoods();
  renderFavoriteFoods();
  renderFoodSuggestions();
  renderPreview();
}

function clearToday() {
  const todayKey = dayKey(new Date());
  state.entries = state.entries.filter((entry) => dayKey(entry.createdAt) !== todayKey);
  saveEntries();
  render();
}

function deleteEntry(id) {
  state.entries = state.entries.filter((entry) => entry.id !== id);
  saveEntries();
  render();
}

function render() {
  const today = todayEntries();
  const totals = today.reduce(
    (acc, entry) => ({
      calories: acc.calories + entry.calories,
      protein: acc.protein + entry.protein,
      carbs: acc.carbs + entry.carbs,
      fat: acc.fat + entry.fat
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  const remaining = state.settings.dailyGoal - totals.calories;
  const remainingProtein = state.settings.proteinGoal - totals.protein;
  const progress = Math.min(totals.calories / state.settings.dailyGoal, 1);
  const proteinProgress = Math.min(totals.protein / state.settings.proteinGoal, 1);
  const circumference = 320.44;

  elements.totalCalories.textContent = formatNumber(totals.calories);
  elements.remainingCalories.textContent =
    remaining >= 0 ? `${formatNumber(remaining)} kcal restantes` : `+${formatNumber(Math.abs(remaining))} kcal`;
  elements.totalProtein.textContent = formatNumber(totals.protein);
  elements.remainingProtein.textContent =
    remainingProtein >= 0 ? `${formatNumber(remainingProtein)} g restantes` : `+${formatNumber(Math.abs(remainingProtein))} g`;
  elements.totalCarbs.textContent = formatNumber(totals.carbs);
  elements.totalFat.textContent = formatNumber(totals.fat);
  elements.goalRing.style.strokeDashoffset = String(circumference * (1 - progress));
  elements.goalRing.style.stroke = totals.calories <= state.settings.dailyGoal ? "var(--orange)" : "var(--red)";
  elements.proteinRing.style.strokeDashoffset = String(circumference * (1 - proteinProgress));
  elements.proteinRing.style.stroke = totals.protein <= state.settings.proteinGoal ? "var(--blue)" : "var(--green)";

  renderEntries(today);
}

function renderPreview() {
  const food = selectedFood();
  const grams = parseNumber(elements.gramsInput.value);
  const nutrition = food && grams > 0
    ? calculateNutrition(food, grams)
    : { calories: 0, protein: 0, carbs: 0, fat: 0 };

  elements.previewCalories.textContent = formatNumber(nutrition.calories);
  elements.previewProtein.textContent = formatNumber(nutrition.protein);
  elements.previewCarbs.textContent = formatNumber(nutrition.carbs);
  elements.previewFat.textContent = formatNumber(nutrition.fat);
  elements.saveEntryButton.disabled = !food || grams <= 0;

  if (!elements.foodInput.value.trim()) {
    updateFoodHint();
  } else if (!food) {
    elements.foodHint.textContent = "Elige un resultado concreto de la lista local.";
  } else if (!grams || grams <= 0) {
    elements.foodHint.textContent = `${food.calories} kcal / 100 g. Falta poner gramos.`;
  } else {
    const source = food.source ? ` Fuente: ${food.source}.` : "";
    elements.foodHint.textContent = `${food.name}: valores aproximados por ${formatNumber(grams)} g.${source}`;
  }
}

function updateFoodHint() {
  const ownFoods = state.customFoods.length;
  const ownCopy = ownFoods ? ` + ${ownFoods} tuyos` : "";
  elements.foodHint.textContent = `${EMBEDDED_FOODS.length} alimentos base${ownCopy}. Escribe para filtrar.`;
}

function renderEntries(entries) {
  elements.entryList.replaceChildren();

  elements.emptyState.hidden = entries.length > 0;
  elements.clearDayButton.hidden = entries.length === 0;

  entries
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .forEach((entry) => {
      const item = document.createElement("li");
      item.className = "entry-item";

      const main = document.createElement("div");
      main.className = "entry-main";

      const note = document.createElement("div");
      note.className = "entry-note";
      note.textContent = entry.foodName || entry.note || "Comida";

      const meta = document.createElement("div");
      meta.className = "entry-time";
      const time = new Intl.DateTimeFormat("es-ES", {
        hour: "2-digit",
        minute: "2-digit"
      }).format(new Date(entry.createdAt));
      const grams = entry.grams ? `${formatNumber(entry.grams)} g` : "manual";
      meta.textContent = `${grams} · ${time}${entry.note && entry.foodName ? ` · ${entry.note}` : ""}`;

      main.append(note, meta);

      const details = document.createElement("div");
      details.className = "entry-kcal";
      details.innerHTML = `
        <div>${formatNumber(entry.calories)} kcal</div>
        <div class="entry-macros">${formatNumber(entry.protein)}P ${formatNumber(entry.carbs)}C ${formatNumber(entry.fat)}G</div>
      `;

      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.type = "button";
      deleteButton.setAttribute("aria-label", "Borrar registro");
      deleteButton.textContent = "x";
      deleteButton.addEventListener("click", () => deleteEntry(entry.id));

      item.append(main, details, deleteButton);
      elements.entryList.append(item);
    });
}

function selectedFood() {
  if (state.selectedFood && normalize(state.selectedFood.name) === normalize(elements.foodInput.value)) {
    return state.selectedFood;
  }

  const needle = normalize(elements.foodInput.value);
  const food = state.foodResults.find((item) => normalize(item.name) === needle)
    || allFoods().find((item) => normalize(item.name) === needle);

  if (food) {
    state.selectedFood = food;
  }

  return food;
}

function toggleFavorite(food) {
  const foodKey = getFoodKey(food);
  if (state.favoriteFoodKeys.includes(foodKey)) {
    state.favoriteFoodKeys = state.favoriteFoodKeys.filter((key) => key !== foodKey);
  } else {
    state.favoriteFoodKeys = [...state.favoriteFoodKeys, foodKey];
  }

  saveFavoriteFoodKeys();
  renderFavoriteFoods();
  renderFoodSuggestions();
}

function isFavorite(food) {
  return state.favoriteFoodKeys.includes(getFoodKey(food));
}

function getFoodKey(food) {
  return normalize(food.name);
}

function allFoods() {
  const customKeys = new Set(state.customFoods.map(getFoodKey));
  return [
    ...state.customFoods,
    ...EMBEDDED_FOODS.filter((food) => !customKeys.has(getFoodKey(food)))
  ];
}

function calculateNutrition(food, grams) {
  const factor = grams / 100;
  return {
    calories: food.calories * factor,
    protein: food.protein * factor,
    carbs: food.carbs * factor,
    fat: food.fat * factor
  };
}

function todayEntries() {
  const todayKey = dayKey(new Date());
  return state.entries.filter((entry) => dayKey(entry.createdAt) === todayKey);
}

function dayKey(value) {
  const date = new Date(value);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function normalize(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function parseNumber(value) {
  const parsed = Number(String(value).replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatNumber(value) {
  return new Intl.NumberFormat("es-ES", {
    maximumFractionDigits: value % 1 === 0 ? 0 : 1
  }).format(value);
}

function loadEntries() {
  try {
    const entries = JSON.parse(localStorage.getItem(STORAGE_KEY))
      ?? JSON.parse(localStorage.getItem(LEGACY_STORAGE_KEY))
      ?? [];
    return Array.isArray(entries) ? entries : [];
  } catch {
    return [];
  }
}

function loadSettings() {
  try {
    const settings = {
      dailyGoal: 2000,
      proteinGoal: 140,
      ...JSON.parse(localStorage.getItem(SETTINGS_KEY))
    };
    return {
      dailyGoal: settings.dailyGoal > 0 ? settings.dailyGoal : 2000,
      proteinGoal: settings.proteinGoal > 0 ? settings.proteinGoal : 140
    };
  } catch {
    return { dailyGoal: 2000, proteinGoal: 140 };
  }
}

function loadCustomFoods() {
  try {
    const foods = JSON.parse(localStorage.getItem(CUSTOM_FOODS_KEY)) ?? [];
    return Array.isArray(foods)
      ? foods
          .filter((food) => food?.name && food.calories > 0)
          .map((food) => ({
            name: String(food.name),
            calories: Number(food.calories) || 0,
            protein: Number(food.protein) || 0,
            carbs: Number(food.carbs) || 0,
            fat: Number(food.fat) || 0,
            source: "propio"
          }))
      : [];
  } catch {
    return [];
  }
}

function loadFavoriteFoodKeys() {
  try {
    const keys = JSON.parse(localStorage.getItem(FAVORITE_FOODS_KEY)) ?? [];
    return Array.isArray(keys) ? keys.map(normalize).filter(Boolean) : [];
  } catch {
    return [];
  }
}

function saveEntries() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.entries));
}

function saveCustomFoods() {
  localStorage.setItem(CUSTOM_FOODS_KEY, JSON.stringify(state.customFoods));
}

function saveFavoriteFoodKeys() {
  localStorage.setItem(FAVORITE_FOODS_KEY, JSON.stringify(state.favoriteFoodKeys));
}
