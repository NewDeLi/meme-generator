# Aufgabenergebnis

## Eingesetzte Technologien / Frameworks

Folgende Technolgien / Frameworks setze ich in meinem Projekt ein:

- TypeScript / React

Ich habe mich für TypeScript entschieden, weil es mir ermöglicht interaktives Verhalten hinzuzufügen und mir gegenüber normalen JavaScript noch weitere Vorteile bietet.Durch die optionale statische Typisierung ändert sich die Typen von Variablen nicht, sobald diese deklariert sind, und können nur spezifische Werte enthalten. Type Errors werden dementsprechend vor der Runtime entdeckt, was Errors im Production Build verhindert.  

Ich nutze das React Framework in meinem Projekt, weil es mir ermöglicht Single Page Applications zu bauen, d.h. es wird nur ein einziges HTML Dokument geladen.
Anstatt das ganze UI als einzige Einheit zu behandeln, kann man mit React das komplexe UI in individuelle wiederverwendbare Components aufteilen. Das macht nicht nur den Code übersichtlich und lesbarer, sondern vereinfacht auch das Debuggen, da die Logik für jede Component isoliert behandelt werden kann.
React ermöglicht Client-Side-Rendering durch das Virtual DOM, d.h. die Webpage muss nicht komplett neu geladen werden, sobald der User eine neue Request macht. Stattdessen werden nur die Teile geupdatet, die geändert werden müssen. Das führt zu einer besseren Performance und User Experience.


## Eingesetzte 3rd Party Libraries

Ich setze in meinem Projekt die folgenden 3rd Party Libraries ein:

Name | Begründung
--- | ---
[tailwindcss](https://tailwindcss.com/) | CSS-Framework mit utility classes statt vollständig vorgestylter Komponenten zur Gestaltung des Frontends.
[canvas-txt](https://github.com/geongeorge/Canvas-Txt) | Zur Gestaltung des Textes, der in Canvas gezeichnet wird.
[react-icons](https://react-icons.github.io/react-icons/) | Zum Hinzufügen von anpassbaren SVG-Icons aus anderen Libaries wie z.B. Font Awesome.

## Installation / Ausführen des Projektes


Folgende Komponenten müssen lokal installiert sein:

- [nodejs](https://nodejs.org/en/) 14.18+, 16+. Aktualisieren Sie auf eine höhere Node.js-Version,wenn der Paketmanager eine Warnung ausgibt.

Um das Projekt lokal auszuführen, folgendes in der Commandline / Bash eingeben:

```console
$ git clone <linktorepository> meme-generator
$ cd meme-generator
$ npm install
$ npm run dev
```
