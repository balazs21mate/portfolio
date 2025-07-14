import { computed, Injectable, signal } from '@angular/core';
import { Languages } from './language.model';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly isEnglish = signal(false);

  private readonly languages = signal<Languages>({
    hungarian: {
      nav: [
        { name: 'Főoldal', href: '#home' },
        { name: 'Rólam', href: '#about-me' },
        { name: 'Készségek', href: '#skills' },
        { name: 'Mini Apps', href: '#mini-apps' },
        { name: 'Kapcsolat', href: '#contact' },
      ],
      jobTitle: 'fejlesztő',
      aboutMe: {
        title: 'Rólam',
        paragraphs: [
          'Szia, Máté Balázs vagyok, junior frontend fejlesztő. Öt éve kezdtem el a programozással ismerkedni. Hosszú és izgalmas út volt, mire a pár soros C++ kódtól a Pythonon át eljutottam a webfejlesztésig, amiben lelkesen igyekszem elmélyülni.',
          'Fontos volt számomra, hogy vizuálisan is lássam munkám gyümölcsét, ezért döntöttem végül úgy, hogy webfejlesztéssel akarok foglalkozni. Magabiztosan használom a HTML5, CSS3, JavaScript és TypeScript technológiákat. Jelenleg az Angular keretrendszert sajátítom el.',
          'A tanulás számomra nagyon fontos, ezért folyamatosan képzem magam. Egy olyan csapat tagja szeretnék lenni, amelyben szintén sokat fejlődhetek, és amelynek értékes tagjává válhatok.',
          'Nézd át a profilomat, és ha felkeltettem érdeklődésedet, a megadott elérhetőségeken keress meg! Örömmel beszélgetek veled a közös lehetőségekről.',
        ],
      },
      skills: {
        title: 'Készségeim',
        skillsArray: [
          {
            name: 'HTML5',
            percent: '90%',
            content:
              'A HTML5 szabványt készségszinten alkalmazom, amellyel SEO-barát, szemantikus és teljeskörűen akadálymentes webszerkezeteket építek. Magabiztosan kezelem a modern input típusokat és a kliensoldali form validációt, valamint a beágyazott multimédiás (<audio>, <video>) és grafikus (<svg>) elemeket. Munkám során felhasználom az olyan alapvető HTML5 API-kat is, mint a Web Storage vagy a Geolocation.',
          },
          {
            name: 'CSS3',
            percent: '90%',
            content:
              'Magabiztosan tervezek és építek komplex, reszponzív webes elrendezéseket a CSS Grid és Flexbox segítségével, minden képernyőméretre optimalizálva. Jártas vagyok a CSS-animációk és tranzíciók készítésében, amelyekkel interaktívabbá tehető a felhasználói élmény.',
          },
          {
            name: 'Bootstrap',
            percent: '70%',
            content:
              'Gyakorlati tapasztalattal rendelkezem a Bootstrap keretrendszerrel, melyet reszponzív weboldalak gyors felépítésére használok. Ismerem és alkalmazom a Bootstrap grid rendszerét a komplex elrendezések kialakításához, valamint a komponenseit (pl. űrlapok) a fejlesztési idő csökkentése érdekében.',
          },
          {
            name: 'JavaScript',
            percent: '70%',
            content:
              'Mély ismeretekkel rendelkezem a modern JavaScript (ES6+) szabványokról, beleértve az arrow function-öket, a destructuringot, a modulrendszert és a class-okat. Gyakorlatom van a DOM manipuációjában, az eseménykezelésben és a kliensoldali adatkezelésben. Fontosnak tartom a tiszta, olvasható és teljesítmény-orientált kód írását.',
          },
          {
            name: 'TypeScript',
            percent: '80%',
            content:
              'Tudatosan használom a TypeScriptet a JavaScript-projektek minőségének és megbízhatóságának növelésére. Magabiztosan definiálok és használok interfészeket és típusokat a szigorú típusbiztonság érdekében. Értem és alkalmazom a TypeScript által nyújtott modern nyelvi funkciókat.',
          },
          {
            name: 'Angular',
            percent: '60%',
            content:
              'Gyakorlati tapasztalatot szereztem a komponens-alapú Angular alkalmazások fejlesztésében. Megértettem és alkalmazom a keretrendszer alapvető építőelemeit, mint a modulokat, komponenseket, direktívákat és service-eket a dependency injection révén. Képes vagyok új funkciókat implementálni egy meglévő Angular projektben, beleértve a template-ek logikáját, az adatkötést és az alapvető útvonal-kezelést (Routing). Aktívan fejlesztem tudásomat a haladóbb témák, mint például a state management (RxJS) irányába.',
          },
        ],
      },
      miniApps: {
        title: 'Mini Apps',
        apps: [
          // {
          //   imgSrc: 'portfolio/gazdalkodj-okosan.png',
          //   imgTitle: 'Gazdálkodj okosan társasjáték képernyőkép',
          //   content:
          //     'Ezt az alkalmazást abból a célból hoztam létre, hogy a „Gazdálkodj okosan!” társasjáték papíralapú banki ügyintézését felváltsa a digitális ügyintézés.',
          //   buttonText: 'Megnyitás',
          //   buttonLink: '/gazdalkodj-okosan',
          // },
          {
            imgSrc: 'portfolio/payroll.png',
            imgTitle: 'Bérszámfejtő alkalmazás képernyőképe',
            content:
              'Számítsd ki egyszerűen a várható fizetésed, és tervezd meg magabiztosan a pénzügyeidet!',
            buttonText: 'Megnyitás',
            buttonLink: '/payroll',
          },
        ],
      },
      contact: {
        title: 'Vedd fel velem a kapcsolatot',
        phone: 'Telefonszám',
        form: {
          title: 'Vagy küldj üzenetet most',
          name: 'Név',
          message: 'Üzenet',
          buttonText: 'Küldés',
        },
        errorMessages: {
          nameRequired: 'A név megadása kötelező.',
          nameValid: 'A név csak betűket, szóközt és kötőjelet tartalmazhat.',
          emailRequired: 'A email megadása kötelező.',
          emailValid: 'Nem megfelelő email formátum.',
          messageRequired: 'Az üzenet megadása kötelező.',
          messageMinLength:
            'Az üzenetnek legalább 10 karakter hosszúnak kell lennie.',
          messageMaxLength: 'Az üzenet nem lehet hosszabb 500 karakternél.',
          sentEmail: 'Üzenet elküldve.',
        },
      },
      footerText: 'Önéletrajz',
      cvButtons: {
        backButton: 'Vissza',
        downloadButton: 'Letöltés',
      },
    },
    english: {
      nav: [
        { name: 'Home', href: '#home' },
        { name: 'About Me', href: '#about-me' },
        { name: 'Skills', href: '#skills' },
        { name: 'Mini Apps', href: '#mini-apps' },
        { name: 'Contact', href: '#contact' },
      ],
      jobTitle: 'developer',
      aboutMe: {
        title: 'About Me',
        paragraphs: [
          "Hi, I'm Máté Balázs, a junior frontend developer. I started getting acquainted with programming five years ago. It has been a long and exciting journey from a few lines of C++ code, through Python, to web development, which I am now enthusiastically striving to master.",
          'It was important for me to visually see the fruits of my labor, which is why I ultimately decided to pursue web development. I am proficient in using HTML5, CSS3, JavaScript, and TypeScript. I am currently learning the Angular framework.',
          'Learning is very important to me, which is why I am constantly educating myself. I would like to be a member of a team where I can also develop a great deal and become a valuable member.',
          "Feel free to look over my profile, and if you're interested, please reach out using the contact information provided. I'd be happy to discuss potential opportunities with you.",
        ],
      },
      skills: {
        title: 'Skills',
        skillsArray: [
          {
            name: 'HTML5',
            percent: '90%',
            content:
              'I apply the HTML5 standard at a skill level, with which I build SEO-friendly, semantic, and fully accessible web structures. I confidently handle modern input types and client-side form validation, as well as embedded multimedia (<audio>, <video>) and graphical (<svg>) elements. In my work, I also utilize fundamental HTML5 APIs such as Web Storage or Geolocation.',
          },
          {
            name: 'CSS3',
            percent: '90%',
            content:
              'I confidently design and build complex, responsive web layouts using CSS Grid and Flexbox, optimized for all screen sizes. I am skilled in creating CSS animations and transitions, which can be used to make the user experience more interactive.',
          },
          {
            name: 'Bootstrap',
            percent: '70%',
            content:
              "I have practical experience with the Bootstrap framework, which I use for the rapid development of responsive websites. I know and apply Bootstrap's grid system for creating complex layouts, as well as its components (e.g., forms) to reduce development time.",
          },
          {
            name: 'JavaScript',
            percent: '70%',
            content:
              'I have deep knowledge of modern JavaScript (ES6+) standards, including arrow functions, destructuring, the module system, and classes. I have practice in DOM manipulation, event handling, and client-side data management. I consider it important to write clean, readable, and performance-oriented code.',
          },
          {
            name: 'TypeScript',
            percent: '80%',
            content:
              'I consciously use TypeScript to increase the quality and reliability of JavaScript projects. I confidently define and use interfaces and types for strict type safety. I understand and apply the modern language features offered by TypeScript.',
          },
          {
            name: 'Angular',
            percent: '60%',
            content:
              "I have gained practical experience in developing component-based Angular applications. I understand and apply the framework's fundamental building blocks, such as modules, components, directives, and services through dependency injection. I am able to implement new features in an existing Angular project, including template logic, data binding, and basic route handling (Routing). I am actively developing my knowledge towards more advanced topics, such as state management (RxJS).",
          },
        ],
      },
      miniApps: {
        title: 'Mini Apps',
        apps: [
          // {
          //   imgSrc: 'portfolio/gazdalkodj-okosan.png',
          //   imgTitle: 'Gazdálkodj okosan board game screenshot',
          //   content:
          //     'This app replaces the paper-based banking in the “Gazdálkodj okosan!” board game, allowing for digital management of finances.',
          //   buttonText: 'Open',
          //   buttonLink:
          //     'https://balazs21mate.github.io/gazdalkodj-okosan-bank/',
          // },
          {
            imgSrc: 'portfolio/payroll.png',
            imgTitle: 'Payroll app screenshot',
            content:
              'Easily calculate your expected salary and plan your finances with confidence!',
            buttonText: 'Open',
            buttonLink: '/payroll',
          },
        ],
      },
      contact: {
        title: 'Get in touch with me',
        phone: 'Phone',
        form: {
          title: 'Or send a message now',
          name: 'Name',
          message: 'Message',
          buttonText: 'Send',
        },
        errorMessages: {
          nameRequired: 'Name is required.',
          nameValid: 'Name can only contain letters, spaces and hyphens.',
          emailRequired: 'Email is required.',
          emailValid: 'Incorrect email format.',
          messageRequired: 'Message is required.',
          messageMinLength: 'Message must be at least 10 characters long.',
          messageMaxLength: 'Message cannot be longer than 500 characters.',
          sentEmail: 'Message sent.',
        },
      },
      footerText: 'CV',
      cvButtons: {
        backButton: 'Back',
        downloadButton: 'Download',
      },
    },
  });

  public readonly language = computed(() => {
    if (this.isEnglish()) {
      return this.languages().english;
    } else {
      return this.languages().hungarian;
    }
  });

  toogleEnglish(isEnglishValue: boolean) {
    this.isEnglish.set(isEnglishValue);
  }
}
