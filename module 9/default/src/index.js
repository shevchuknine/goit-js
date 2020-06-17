// import _ from "lodash";
import debounce from "lodash.debounce";
import slug from "slug";
import "bootstrap/dist/css/bootstrap.css";

let names = "Carilyn Test,Jo Te,Nevin,Walton,Desiree,Ellyn,Fanni,Libbie,Ailey,Charlene,Maribelle,Alwin,Lorelei,Karoly,Salomo,Dru,Deeyn,Drusie,Antons,Carlie,Phyllida,Beverly,Eleni,Penelope,Terry,Gaspard,Luigi,Buddy,Kip,Lenard,Mano,Dorian,Siobhan,Tallou,Viv,Jorry,Xaviera,Thorsten,Eduino,Micheline,Silvio,Graig,Petronilla,Jude,Scot,Nikki,Noni,Lamar,Sonnnie,Cortney,Berty,Aloise,Quinn,Weylin,Ortensia,Norene,Hana,Eileen,Kora,Dode,Constance,Dudley,Corri,Magda,Job,Cobby,Philip,Abrahan,Ophelia,Eolanda,Judy,Lynne,Isaac,Wendell,Lenora,Ugo,Allison,Odetta,Colman,Darcy,Jamaal,Jesus,Demetri,Celesta,Abelard,Cherice,Humphrey,Donaugh,Stanly,Peirce,Ed,Linzy,Engracia,Smith,Barrie,Golda,Lorene,Donny,Laverna,Imelda,Lexine,Kerry,Shermy,Phillipp,Colman,Donal,Beverly,Neil,Bernadina,Morna,Jeni,Dela,Harlen,Tandie,Ogden,Washington,Micki,Courtenay,Millard,Marlena,Lenora,Marie-jeanne,Steward,Cate,Adora,Peirce,Harlie,Raychel,Robinson,Spike,Cassondra,Ernestine,Aloise,Deborah,Cristen,Linnea,Elnore,Nada,Georgena,Eimile,Carmelia,Emlen,Hobie,Robinett,Dehlia,Joy,Clim,Brennen,Christi,Dyanna,Quintus,Zuzana,Wainwright,Dugald,Veda,Randene,Galven,Gil,Ringo,Wilow,Lavinia,Steffane,Schuyler,Lindsay,Madeleine,Iorgo,Greer,Reagen,Evonne,Finley,Gregoor,Rogerio,Giordano,Findlay,Roselin,Clement,Phyllis,Noell,Anson,Erhart,Kirbie,Feliza,Yehudit,Eula,Novelia,Jori,Rollie,Brinna,Emmit,Clarice,Natassia,Christopher,Maible,Chandra,Skye,Yancey,Avram,Elizabeth,Dirk,Adriane,Addia,Marabel,Rianon,Ann,Richmound,Florri,Ferdy,Joellyn,Ryann,Caresa,Emily,Dulce,Dew,Edward,Dalila,Lucius,Tish,Justine,Dolly,Kaitlin,Baxie,Audrye,Toddie,Niccolo,Marya,Drucill,Cosmo,Brigg,Stevie,Mandy,Whitby,Jdavie,Allis,Romain,Sutherlan,Giana,Merle,Shurlock,Dory,Caroline,Burg,Judd,Guenevere,Guglielma,Myrta,Carola,Maxine,Charlton,Giselle,Gilbertina,Ede,Lorne,Keslie,Pearce,Analiese,Gustavus,Thomasa,Sandra,Vivienne,Vick,Carlin,Corbett,Brandtr,Timothea,Denice,Correna,Amalea,Abbe,Catlee,Rafaello,Orrin,Jaime,Shelly,Loreen,Aubry,Euphemia,Gale,Nappy,Mirabelle,Melody,Bobbette,Bradan,Jule,Lana,Nari,Thorsten,Mame,Samuele,Vidovik,Peirce,Rolfe,Tersina,Adelheid,Ethel,Stevena,Anjanette,Janessa,Janka,Carlin,Cornie,Sheilakathryn,Verine,Betty,Devonne,Conni,Rozanne,Davey,Isidro,Frederic,Bonita,Wain,Timi,Rena,Skelly,Arron,Maggi,Goldy,Emera,Idette,Barbra,Todd,Packston,Loise,Silvia,Carlo,Grantley,Burty,Nicoline,Carmine,Chevy,Scot,Lorri,Raynor,Bidget,Albertina,Clarita,Elyssa,Alf,Heida,Gallagher,Bret,Theda,Yasmin,Rance,Abbott,Filippa,Vlad,Sherill,Karil,Carmon,Elora,Eve,Marcel,Nichol,Davin,Vernen,Grover,Dorette,Perla,Noby,Carole,Maurizia,Reube,Kara,Caleb,Kennedy,Lacy,Sherman,Elissa,Lucille,Eachelle,Zondra,Ruthi,Russ,Carol-jean,Dale,Bowie,Dulcie,Christabella,Joanne,Buddie,Bentlee,Jerad,Leonore,Edouard,Seymour,Feliza,George,Marje,Anestassia,Ramonda,Portia,Cletus,Carmelle,Muffin,Lolly,Ody,Florrie,Amalle,Iona,Ebonee,Thedrick,Barth,Tabor,Ludovico,Audrie,Christophe,Gregor,Pete,Humbert,Didi,Adrian,Janina,Adrian,Kathryn,Leanora,Sloan,Ivan,Ainslie,Rafaela,April,Emmalyn,Christy,Tiffanie,Skippie,Eldin,Marie-ann,Kiley,Petr,Marney,Reine,Celle,Bridget,Vernon,Alidia,Fanchon,Harmony,Antony,Jock,Mandi,See,Britt,Winona,Abraham,Dicky,Hilliard,Meggy,Paulo,Nanine,Hyacinthie,Natty,Mitchael,Lynnea,Mada,Lianne,Nichol,Cyndy,Vincent,Dennison,Beret,Stevena,Salvatore,Carolyn,Cletus,Ag,Vina,Kev,Curcio,Clementia,Merl,Tamera,Danika,Dore,Jedd,Even,Shepherd,Eolanda,Faunie,Beverley,Dorey,Nikaniki,Andriette,Rowe,Izabel,Pauly,Maurene,Gabriella,Linoel,Fenelia,Oralia,Pall,Myrtice,Tom,Kareem,Karalee,Padgett,Blair,Bram,Doralynn,Adam,Claire,Kipper,Georgine,Tabbi,Thurstan,Sophi,Freddie,Marcellus,Winny,Lothaire,Tommie,Homer,Teirtza,Sada,Sampson,Ric,Ruthanne,Fanchette,Raoul,Lurline,Maud,Kennan,Carlen,Thorn,Theressa,Hilly,Aline,Jsandye,Alaine,Stevana,Deeann,Maryl,Anissa,Lauree,Cindra,Marthena,Val,Adele,Karyn,Louella,Mattie,Coop,Darsey,Melicent,Fawn,Karna,Munroe,Renard,Chip,Cherida,Carmelia,Lodovico,Marley,Rocky,Harcourt,Helenka,Cinnamon,Darryl,Olav,Mariann,Paolo,Cristal,Patton,Prentice,Blisse,Esther,Ainslee,Charissa,Erin,Lory,Judd,Koral,Michelle,Tanhya,Silvie,Frederique,Allan,Zena,Perkin,Fletch,Darice,Megan,Inglis,Morgan,Desmund,Fitzgerald,Kaja,Cyndi,Marlie,Denyse,Vanda,Niven,Doloritas,Koren,Seward,Charmane,Lorraine,Hollie,Amye,Florentia,Robyn,Keenan,Charles,Maddi,Shalne,Marris,Aristotle,Sandy,Demetri,Patrizia,Romonda,Petronille,Dorothy,Dierdre,Mason,Meghan,Ambrosio,Gustav,Aleksandr,Darcy,Amabelle,Nikolaus,Thorstein,Burr,Milena,Carleton,Jacquetta,Adorne,Tiebout,Chandra,Yelena,Evin,Justina,Karissa,Chen,Polly,Aryn,Anthia,Mario,Siward,Karyn,Constanta,Rand,Arne,Raul,Gilburt,Clem,Marvin,Fredek,Alikee,Barret,Clemmy,Zacharie,Alvy,Phineas,Henry,Monti,Maegan,Kippie,Prent,Jaymie,Rebekkah,Gratia,Gearard,Vite,Bordie,Barbra,Terri,Pebrook,Darryl,Zora,Mel,Alonso,Leeanne,Rollo,Ginevra,Wain,Sim,Chandal,Pedro,Everard,Maureene,Hortense,Aloin,Tamiko,Guss,Marleen,Rose,Riannon,Herschel,Grannie,Lolita,Haley,Tiffi,Wanids,Lind,Enos,Taber,Amelie,Janetta,Kareem,Lucia,Christoper,Avis,Harland,Edmon,Lyle,Connie,Vivie,Maryanna,Ibrahim,Jesse,Joane,Dori,Orv,Raynell,Chauncey,Gawen,Morris,Charo,Sandy,Lin,Trstram,Saunderson,Rae,Stacie,Jayme,Hadlee,Blisse,Marco,Galvin,Baillie,Shelden,Esma,Pedro,Gunner,Doyle,Oran,Bowie,Matty,Gerik,Cletis,Illa,Augusta,Tomi,Phebe,Fons,Hadley,Isabelita,Evangelia,Sascha,Daffy,Andie,Berkie,Agathe,Vannie,Ashbey,Marji,Evie,Stanford,Dore,Tony,Reeta,Jamison,Tiebold,Clarey,Vinnie,Xena,Waylen,Allegra,Perren,Garv,Henri,Sean,Merrily,Farlie,Konstanze,Pollyanna,Roscoe,Lemar,Regina,Nesta,Jeremy,Della,Ulysses,Adel,Magdaia,Jesse,Marielle,Fanni,Normie,Elna,Sam,Modestine,Hammad,Henry,Tobias,Fairleigh,Meggie,Rey,Junina,Beverlie,Kellia,Kylen,Cristie,Philomena,Jorie,Gratia,Corney,Quintana,Aldridge,Darlleen,Moises,Stepha,Addy,Scottie,Clementina,Tibold,Candy,Coral,Meryl,Irwinn,Daveen,Aurilia,Corey,Brittany,Morganica,Ellerey,Carroll,Greta,Kelwin,Weber,Andros,Wallie,Robin,Robby,Melisenda,Yolanthe,Carmen,Ki,Dill,Murielle,Nadeen,Travers,Jaime,Zane,Barrie,Katheryn,Hubey,Trudie,Anestassia,Roshelle,Allyn,Conant,Florry,Rhea,Torrey,Leda,Evanne,Sheree,Marlon,Nikolos,Baldwin,Elinor,Horton,Janela,Brunhilda,Trevor,Hesther,Bonny,Marin,Cosme,Zonda,Nariko,Peirce,Jammal,Fiann,Ram,Alistair,Meryl,De,Aviva,Timotheus,Madlin,Nancy,Aldwin,Gwenni,Carmela,Anderea,Loralie,Donalt,Aidan,Nanni,Gib,Warren,Fionna,Marcia,Waldon,Annabelle,Raleigh,Knox,Adele,Rea,Kirby,Carena,Binny,Veradis,Cris,Carolan,Oralie,Natala,Beau,Etta,Hugues,Marijn,Wash,Rosamond,Kerri,Mable,Timmi,Aguistin,Claretta,Gusti,Margalo,Yorgo,Nisse,Lamont,Mureil,Dennet,Min,Vic,Gail,Bertrand,Brander,Trumaine,Katina,Todd,Donna,Cleon,Christin,Reina,Paige,Brocky,Ward,Maddalena,Edie,Anabel,Niki,Sharl,Rikki,Fedora,Nial,Greer,Goldy,Gaelan,Phylis,Franklin,Lynnell,Urbain,Mose,Trudey,Tod,Tanya,Daloris,Cornell,Felix,Phyllys,Lazaro,Teresa,Reube,Ross,Eduard,Rocky,Yolane,Candie,Justine,Belvia,Mollee,Garner,Devin,Yoko,Petr,Ryun,Abbie,Crichton,Nissy,Ruthann,Alvina,Gualterio,Tara,Giselbert,Ninnette,Erl,Harriett,Humbert,Suzy,Adelaide,Cedric,Nikolaos,Nikki".split(",");
names = names.map(item => item.toLowerCase());

const input = document.querySelector("input");
const checkbox = document.querySelector("#checkbox");
const resultBlock = document.querySelector(".result");

const propagationOnInput = event => {
    if (!checkbox.checked) {
        // event.stopPropagation();
        event.stopImmediatePropagation();
    }
};

function onInput(event) {
    const value = event.target.value.toLowerCase();

    if (value === "") {
        resultBlock.innerHTML = "No input";
    } else {
        const resultOfSearch = names.filter(name => {
            return name.includes(value);
        }).map(name => {
            return `<p><a target="_blank" href=${`/${slug(`name = ${name}`)}`}>${name}</a></p>`
        });

        if (resultOfSearch.length === 0) {
            resultBlock.innerHTML = "No data";
        } else {
            resultBlock.innerHTML = resultOfSearch.join("");
        }
    }
};

// const debouncedOnInput = _.debounce(onInput, 300);
const debouncedOnInput = debounce(onInput, 300);

input.addEventListener("input", propagationOnInput);
input.addEventListener("input", debouncedOnInput);
// input.removeEventListener("input", debouncedOnInput);
