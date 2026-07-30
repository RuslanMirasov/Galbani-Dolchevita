# Galbani - Dolchevita promo site

## Попап рецепта

Данные рецептов лежат в [assets/json/galbani_recipes.json](./assets/json/galbani_recipes.json), логика вывода — в
[assets/js/modules/recipes.js](./assets/js/modules/recipes.js). Открыть попап рецепта с конкретным `id` можно двумя способами.

### 1. Через атрибут `data-popup-open`

```html
<button type="button" data-popup-open="recipe" data-recipe-id="abruzzo">
  <span>Открыть рецепт</span>
</button>
```

- `data-popup-open="recipe"` — id попапа, который нужно открыть (совпадает с `id` контейнера `.popup-content`).
- `data-recipe-id="abruzzo"` — id рецепта из `galbani_recipes.json`.

### 2. Через JS

```js
window.popup.open('recipe', 'abruzzo');
```

Первый аргумент — id попапа, второй — id рецепта.

### Изображения рецептов

Хранятся в [assets/img/recipes/](./assets/img/recipes/) в формате `.webp`, имя файла совпадает с `id` рецепта (например, `abruzzo.webp`). Путь к файлу указан в поле `image` каждого рецепта в `galbani_recipes.json` (`./assets/img/recipes/<id>.webp`).

### Доступные id рецептов

- `abruzzo`
- `puglia`
- `basilicata`
- `valle-d-aosta`
- `veneto`
- `calabria`
- `campania`
- `lazio`
- `liguria`
- `lombardia`
- `marche`
- `molise`
- `piemonte`
- `sardegna`
- `sicilia`
- `toscana`
- `trentino-alto-adige`
- `umbria`
- `friuli-venezia-giulia`
- `emilia-romagna`
