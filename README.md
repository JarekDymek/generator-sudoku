# Sudoku 4×A4 — generator PWA

Generator tworzy cztery różne sudoku 9×9 na jednej stronie A4. Możesz wybrać jeden z czterech poziomów trudności i dołączyć osobną stronę z rozwiązaniami. Każda plansza jest sprawdzana pod kątem jednego rozwiązania i rozwiązywalności logicznej.

## Publikacja w GitHub Pages

Repozytorium publikuje aplikację automatycznie przez GitHub Actions po każdym wypchnięciu zmian do gałęzi `main`.

1. Wgraj zawartość tego katalogu do głównego katalogu repozytorium GitHub.
2. W ustawieniach repozytorium otwórz **Pages** i jako źródło wybierz **GitHub Actions**.
3. Po zakończeniu zadania `Publish Sudoku 4xA4 PWA` otwórz adres Pages wyświetlony w podsumowaniu wdrożenia.

GitHub Pages udostępnia stronę przez HTTPS, wymagane do instalacji PWA. Aplikacja nie korzysta z zewnętrznych bibliotek ani usług.

## Instalacja

- **Android:** otwórz adres Pages w Chrome, wybierz menu i naciśnij „Zainstaluj aplikację” lub „Dodaj do ekranu głównego”.
- **iPhone / iPad:** otwórz adres w Safari, naciśnij „Udostępnij”, a następnie „Dodaj do ekranu początkowego”.
- **Komputer:** otwórz stronę w Chrome lub Edge i wybierz ikonę instalacji w pasku adresu albo pozycję instalacji w menu.

Po pierwszym otwarciu aplikacja buforuje pliki na urządzeniu i może działać bez połączenia z internetem. Nowe urządzenie musi połączyć się z internetem przynajmniej raz, aby pobrać aplikację.

## Drukowanie

Wybierz poziom, wygeneruj zestaw i naciśnij **Drukuj / Zapisz PDF**. Strona z odpowiedziami jest opcjonalna. W oknie drukowania wybierz A4, orientację pionową i skalę 100%.

## Poziomy

| Poziom | Wpisane liczby | Puste kratki |
|---|---:|---:|
| Łatwy | 40–41 | 40–41 |
| Średni | 30–35 | 46–51 |
| Wysoki | 25–30 | 51–56 |
| PRO | 17–20 | 61–64 |

Liczba wskazówek jest tylko przybliżeniem trudności. Aplikacja sprawdza unikalność rozwiązań oraz rozwiązywalność dedukcyjną bez zgadywania.

