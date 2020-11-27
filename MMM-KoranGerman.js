/* global Log, Module, moment */

/* Magic Mirror
 * Module: MMM-Koran_German
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */
Module.register("KoranGerman", {

	// Module config defaults.
	defaults: {
		KoranGerman: {
			anytime: [
				// ALFATIHA (DIE ERÖFFNENDE)
				// 01
				"Im Namen Allahs, des Allerbarmers, des Barmherzigen. (1:1)",
				"(Alles) Lob gehört Allah, dem Herrn der Welten, (1:2)",
				"dem Allerbarmer, dem Barmherzigen, (1:3)",
				"dem Herrscher am Tag des Gerichts. (1:4)",
				"Dir allein dienen wir, und zu Dir allein flehen wir um Hilfe. (1:5)",
				"Leite uns den geraden Weg, (1:6)",
				"den Weg derjenigen, denen Du Gunst erwiesen hast, nicht derjenigen, die (Deinen) Zorn erregt haben, und nicht der Irregehenden! (1:7)",


				// AL-BAQARA (DIE KUH)
				// SURE 02
				"Alif-Lām-Mīm (2:1)",
				"Dieses Buch, an dem es keinen Zweifel gibt, ist eine Rechtleitung für die Gottesfürchtigen, (2:2)",
				"die an das Verborgene glauben, das Gebet verrichten und von dem, womit Wir sie versorgt haben, ausgeben(2:3)",
				"und die an das glauben, was zu dir (an Offenbarung) herabgesandt worden ist, und was vor dir herabgesandt wurde, und die vom Jenseits überzeugt sind.(2:4)",
				"Jene verfahren nach einer Rechtleitung von ihrem Herrn, und das sind diejenigen, denen es wohl ergeht.(2:5)",
				"Gleich ist es in Bezug auf diejenigen, die ungläubig sind, ob du sie warnst oder nicht warnst; sie glauben nicht.(2:6)",
				"Allah hat ihre Herzen und ihr Gehör versiegelt, über ihrem Augenlicht befindet sich eine Hülle. Für sie wird es gewaltige Strafe geben.(2:7)",
				"Unter den Menschen gibt es manche, die sagen: „Wir glauben an Allah und an den Jüngsten Tag“, doch sind sie nicht gläubig.(2:8)",
				"Sie möchten Allah und diejenigen, die glauben, betrügen. Aber sie betrügen nur sich selbst, ohne zu merken.(2:9)",
				"In ihren Herzen ist Krankheit, und da hat Allah ihnen die Krankheit noch gemehrt. Für sie wird es schmerzhafte Strafe dafür geben, daß sie zu lügen pflegten.(2:10)",
				"Und wenn man zu ihnen sagt: „Stiftet nicht Unheil auf der Erde!“ sagen sie: „Wir sind ja nur Heilstifter“.(2:11)",
				"Dabei sind doch eben sie die Unheilstifter, nur merken sie nicht.(2:12)",
				"Und wenn man zu ihnen sagt: „Glaubt, wie die Menschen glauben!“, so sagen sie: „Sollen wir glauben,  wie die Toren glauben?“ Dabei sind doch eben sie die Toren. Aber sie wissen nicht.(2:13)",
				"Und wenn sie diejenigen treffen, die glauben, sagen sie: „Wir glauben.“ Wenn sie jedoch mit ihren Teufeln allein sind, so sagen sie:  „Wir stehen zu euch. Wir machen uns ja nur lustig“.(2:14)",
				"Allah ist es, Der Sich über sie lustig macht. Und Er läßt sie in ihrer Auflehnung umherirren.(2:15)",
				"Das sind diejenigen, die das Irregehen um die Rechtleitung erkauft haben, doch hat ihr Handel keinen Gewinn gebracht, und sie sind nicht rechtgeleitet.(2:16)",
				"Ihr Gleichnis ist das jemandes, der ein Feuer anzündet. Nachdem es seine Umgebung erhellt hat, nimmt Allah ihr Licht weg und läßt sie in Finsternis zurück; sie sehen nicht.(2:17)",
				"Taub, stumm und blind: So werden sie nicht umkehren.(2:18)",
				"Oder es ist wie ein Gewitterregen, der vom Himmel niedergeht, voller Finsternis,  Donner und Blitz. Sie stecken sich die Finger in die Ohren vor den Donnerschlägen, um dem Tod zu entfliehen,  doch Allah umfaßt die Ungläubigen.(2:19)",
				"Der Blitz reißt ihnen beinahe das Augenlicht fort. Jedesmal, wenn er ihnen Helligkeit verbreitet,  gehen sie darin. Und wenn es finster um sie wird, bleiben sie stehen.  Wenn Allah wollte, nähme Er ihnen wahrlich Gehör und Augenlicht. Allah hat zu allem die Macht.(2:20)",
				"O ihr Menschen! Dient eurem Herrn, Der euch und diejenigen vor euch erschaffen hat, auf daß ihr gottesfürchtig werden möget!(2:21)",
				"Der euch die Erde zu einem Ruhebett und den Himmel zu einem Gebäude gemacht hat und vom Himmel Wasser herabkommen läßt, \n durch das Er dann für euch Früchte als Versorgung hervorbringt.  So stellt Allah nicht andere als Seinesgleichen zur Seite, wo ihr (es) doch (besser) wißt.(2:22)",
				"Und wenn ihr im Zweifel über das seid, was Wir Unserem Diener offenbart haben, dann bringt doch eine Sūra gleicher Art bei und ruft eure Zeugen außer Allah an, wenn ihr wahrhaftig seid!(2:23)",
				"Doch wenn ihr es nicht tut – und ihr werdet es nicht tun –, dann hütet euch vor dem (Höllen)feuer, dessen Brennstoff Menschen und Steine sind. Es ist für die Ungläubigen bereitet.(2:24)",
				"Und verkünde denen, die glauben und rechtschaffene Werke tun, (die frohe Botschaft,) daß ihnen Gärten zuteil werden, durcheilt von Bächen. Jedesmal, wenn sie mit einer Frucht daraus versorgt werden, sagen sie: „Das ist ja das, womit wir zuvor versorgt wurden“; doch es ist ihnen eine ihr ähnliche gegeben worden. Und darin haben sie vollkommen gereinigte Gattinnen. Und ewig werden sie darin bleiben.(2:25)",
				"Allah schämt Sich nicht, ein Gleichnis auch nur mit einer Mücke oder mit etwas darüber (hinaus) zu prägen. Was nun diejenigen angeht, die glauben, so wissen sie, daß es die Wahrheit von ihrem Herrn ist. Was aber diejenigen angeht, die ungläubig sind, so sagen sie: „Was will denn Allah damit als Gleichnis?“ Er läßt damit viele in die Irre gehen und leitet viele damit recht, doch läßt Er damit nur die Frevler in die Irre gehen,(2:26)",
				"die Allahs Bund nach seiner Abmachung brechen und trennen, was Allah befohlen hat, daß es verbunden werden soll, und auf der Erde Unheil stiften – das sind die Verlierer.(2:27)",
				"Wie könnt ihr Allah verleugnen, wo ihr doch tot wart und Er euch dann lebendig gemacht hat, euch hierauf sterben läßt und darauf wieder lebendig machen wird, worauf ihr zu Ihm zurückgebracht werdet?(2:28)",
				"Er ist es, Der für euch alles, was auf der Erde ist, erschuf und Sich hierauf dem Himmel zuwandte und ihn dann zu sieben Himmeln formte. Er weiß über alles Bescheid.(2:29)",
				"Und als dein Herr zu den Engeln sagte: „Ich bin dabei, auf der Erde einen Statthalter einzusetzen“, da sagten sie: „Willst Du auf ihr etwa jemanden einsetzen, der auf ihr Unheil stiftet und Blut vergießt, wo wir Dich doch lobpreisen und Deiner Heiligkeit lobsingen?“ Er sagte: „Ich weiß, was ihr nicht wißt.“(2:30)",
				"Und Er lehrte Ādam die Namen alle. Hierauf legte Er sie den Engeln vor und sagte: „Teilt Mir deren Namen mit, wenn ihr wahrhaftig seid!“(2:31)",
				"Sie sagten: „Preis sei Dir! Wir haben kein Wissen außer dem, was Du uns gelehrt hast. Du bist ja der Allwissende und Allweise.“(2:32)",
				"Er sagte: „O Ādam, teile ihnen ihre Namen mit!“ Als er ihnen ihre Namen mitgeteilt hatte, sagte Er: „Habe Ich euch nicht gesagt, Ich kenne das Verborgene der Himmel und der Erde, und Ich weiß auch, was ihr offenlegt und was ihr verborgen zu halten sucht?“(2:33)",
				"Und als Wir zu den Engeln sagten: „Werft euch vor Ādam nieder!“ Da warfen sie sich nieder, außer Iblīs. Er weigerte sich und verhielt sich hochmütig und gehörte zu den Ungläubigen.(2:34)",
				"Und Wir sagten: „O Ādam, bewohne du und deine Gattin den (Paradies)garten, und eßt von ihm reichlich, wo immer ihr wollt! Aber nähert euch nicht diesem Baum, sonst gehört ihr zu den Ungerechten!“(2:35)",
				"Doch Satan entfernte sie davon, und da vertrieb er sie aus dem, worin sie (an Glückseligkeit) gewesen waren. Wir sagten: „Geht fort! Einige von euch seien der anderen Feind. Und auf der Erde sollt ihr Aufenthalt und Nießbrauch auf Zeit haben.“(2:36)",
				"Da empfing Ādam von seinem Herrn Worte, und darauf nahm Er seine Reue an. Er ist ja der Reue-Annehmende und Barmherzige.(2:37)",
				"Wir sagten: Geht alle fort von ihm (, dem Paradiesgarten). Wenn nun von Mir Rechtleitung zu euch kommt, dann soll über diejenigen, die Meiner Rechtleitung folgen, keine Furcht kommen, noch sollen sie traurig sein.(2:38)",
				"Diejenigen aber, die ungläubig sind und Unsere Zeichen für Lüge erklären, das sind Insassen des (Höllen)feuers. Ewig werden sie darin bleiben.(2:39)",
				"O Kinder Isrāʾīls, gedenkt Meiner Gunst, die Ich euch erwiesen habe! Und haltet euren Bund Mir gegenüber, so will Ich Meinen Bund euch gegenüber halten! Und vor Mir (allein) sollt ihr Ehrfurcht haben.(2:40)",
				"Und glaubt an das, was Ich (als Offenbarung) hinabgesandt habe, das zu bestätigen, was euch bereits vorliegt. Und seid nicht die ersten, die es verleugnen. Und verkauft Meine Zeichen nicht für einen geringen Preis. Und Mich allein sollt ihr fürchten.(2:41)",
				"Und verdeckt nicht das Wahre durch das Falsche, und verschweigt nicht die Wahrheit, wo ihr doch wißt!(2:42)",
				"Und verrichtet das Gebet, entrichtet die Abgabe und verbeugt euch (im Gebet) mit den sich Verbeugenden!(2:43)",
				"Befehlt ihr denn den Menschen Güte, während ihr euch selbst vergeßt, wo ihr doch die Schrift lest? Begreift ihr denn nicht?(2:44)",
				"Und sucht Hilfe in der Standhaftigkeit und im Gebet! Es ist freilich schwer, nur nicht für die Demütigen,(2:45)",
				"die daran glauben, daß sie ihrem Herrn begegnen werden, und daß sie zu Ihm zurückkehren.(2:46)",
				"O Kinder Isrāʾīls, gedenkt Meiner Gunst, die Ich euch erwiesen habe, und daß Ich euch vor den (anderen) Weltenbewohnern bevorzugt habe.(2:47)",
				"Und hütet euch vor einem Tag, an dem keine Seele etwas anstelle einer anderen übernehmen kann und von keiner Fürsprache noch Ersatz(leistung) angenommen wird und ihnen keine Hilfe zuteil wird!(2:48)",
				"Und (gedenkt,) als Wir euch von den Leuten Firʿauns erretteten, die euch eine böse Qual auferlegten, indem sie eure Söhne allesamt abschlachteten und (nur) eure Frauen am Leben ließen. Darin war für euch eine gewaltige Prüfung von eurem Herrn.(2:49)",
				"Und als Wir für euch das Meer teilten und euch so retteten und die Leute Firʿauns ertrinken ließen, während ihr zuschautet!(2:50)",
				"Und als Wir Uns mit Mūsā auf vierzig Nächte verabredeten, da nahmt ihr dann nach ihm das Kalb an, womit ihr Unrecht tatet.(2:51)",
				"Hierauf, nach alledem, verziehen Wir euch, auf daß ihr dankbar wäret.(2:52)",
				"Und als Wir Mūsā die Schrift und die Unterscheidung gaben, auf daß ihr rechtgeleitet werdet.(2:53)",
				"Und als Mūsā zu seinem Volk sagte: „O mein Volk, ihr habt euch selbst Unrecht zugefügt, indem ihr das Kalb (zum Gegenstand der Anbetung) genommen habt. Bereut nun vor eurem Erschaffer und tötet dann (die Schuldigen unter) euch selbst! Dies ist besser für euch vor eurem Erschaffer!“ Und da nahm Er eure Reue an; Er ist ja der Reue-Annehmende und Barmherzige.(2:54)",
				"Und als ihr sagtet: „O Mūsā, wir werden dir nicht eher glauben, bis wir Allah unverhüllt sehen!“ Da überkam euch der Donnerschlag, während ihr zuschautet.(2:55)",
				"Hierauf erweckten Wir euch nach eurem Tod, auf daß ihr dankbar wäret.(2:56)",
				"Und Wir ließen die Wolken euch überschatten und sandten das Manna und die Wachteln auf euch hinab: „Eßt von den guten Dingen, mit denen Wir euch versorgt haben.“ Und sie fügten nicht Uns Unrecht zu, sondern sich selbst.(2:57)",
				"Und als Wir sagten: „Tretet ein in diese Stadt und dann eßt, wo immer ihr wollt, reichlich von (dem, was in) ihr (ist). Und tretet, euch niederwerfend, durch das Tor ein und sagt: ‚Vergebung ‘, so vergeben Wir euch eure Verfehlungen. Und Wir werden den Gutes Tuenden noch mehr erweisen.“(2:58)",
				"Doch da tauschten diejenigen, die Unrecht taten, das Wort gegen ein anderes aus, das ihnen nicht gesagt worden war. Und da sandten Wir auf diejenigen, die Unrecht taten, eine unheilvolle Strafe vom Himmel hinab dafür, daß sie gefrevelt hatten.(2:59)",
				"Und als Mūsā für sein Volk um Wasser bat, da sagten Wir: „Schlag mit deinem Stock auf den Felsen!“ Da entsprangen ihm zwölf Quellen. Nun wußte jedermann, wo sein Platz zum Trinken war: „Eßt und trinkt von Allahs Versorgung und richtet auf der Erde nicht unheilstiftend Verderben an!“(2:60)",
				"Und als ihr sagtet: „O Mūsā, wir halten eine Speise allein nicht aus. Bitte doch für uns deinen Herrn, Er soll für uns etwas hervorbringen von dem, was die Erde wachsen läßt an Grünzeug, Gurken, Getreide, Linsen und Zwiebeln!“ Er sagte: „Wollt ihr das, was besser ist, eintauschen gegen das, was geringer (an Wert) ist? Geht fort in (irgendeine) Stadt! Dann werdet ihr bekommen, was ihr verlangt habt.“ Und es wurde ihnen Erniedrigung und Elend auferlegt, und sie zogen sich den Zorn von Allah zu. Dies, weil sie stets Allahs Zeichen verleugneten und die Propheten ohne Recht töteten; dies, weil sie sich widersetzten und stets übertraten.(2:61)",
				"Gewiß, diejenigen, die glauben, und diejenigen, die dem Judentum angehören, und die Christen und die Ṣābier – wer immer an Allah und den Jüngsten Tag glaubt und rechtschaffen handelt, – die haben ihren Lohn bei ihrem Herrn, und keine Furcht soll sie überkommen, noch werden sie traurig sein.(2:62)",
				"Und als Wir mit euch ein Abkommen trafen und den Berg über euch emporhoben (und zu euch sagten): „Haltet fest an dem, was Wir euch gegeben haben, und gedenkt dessen, was es enthält, auf daß ihr gottesfürchtig werden möget!“(2:63)",
				"Dann kehrtet ihr euch nach alledem ab. Aber wenn nicht Allahs Huld gegen euch und Sein Erbarmen gewesen wären, gehörtet ihr wahrlich zu den Verlierern.(2:64)",
				"Und ihr kennt doch diejenigen von euch, die den Sabbat übertraten. Da sagten Wir zu ihnen: „Werdet verstoßene Affen!“(2:65)",
				"Und so machten Wir dies für alle mit und nach euch zu einem warnenden Beispiel und zu einer Ermahnung für die Gottesfürchtigen.(2:66)",
				"Und als Mūsā zu seinem Volk sagte: „Allah befiehlt euch, daß ihr eine Kuh schlachten sollt!“ Sie sagten: „Machst du dich über uns lustig?“ Er sagte: „Ich nehme Zuflucht bei Allah (davor), daß ich zu den Toren gehöre!“(2:67)",
				"Sie sagten: „Bitte für uns deinen Herrn, uns Klarheit zu geben, wie sie sein soll!“ Er sagte: „Er (Allah) sagt, es soll eine Kuh sein, die weder zu alt noch zu jung zum Kalben ist, sondern dazwischen, in mittlerem Alter. So tut nun, was euch befohlen wird!“(2:68)",
				"Sie sagten: „Bitte für uns deinen Herrn, uns Klarheit zu geben, welche Farbe sie haben soll!“ Er sagte: „Er (Allah) sagt, es soll eine gelbe Kuh sein, von lebhafter Farbe, die die Betrachter erfreut.“(2:69)",
				"Sie sagten: „Bitte für uns deinen Herrn, uns Klarheit zu geben, wie sie sein soll! Die Kühe erscheinen uns (alle) ähnlich. Doch wenn Allah will, so werden wir wahrlich rechtgeleitet sein.“(2:70)",
				"Er sagte: „Er (Allah) sagt, es soll eine Kuh sein, nicht fügsam gemacht durch Pflügen der Erde noch durch Bewässern von Saatfeld, fehlerfrei und makellos!“ Sie sagten: „Jetzt bist du mit der Wahrheit gekommen.“ So schlachteten sie sie, doch beinahe hätten sie es nicht getan.(2:71)",
				"Und (gedenkt,) als ihr jemanden getötet hattet und euch darüber strittet; und Allah wollte herausbringen, was ihr verborgen hieltet.(2:72)",
				"Da sagten Wir: „Schlagt ihn mit einem Stück von ihr!“ So macht Allah die Toten wieder lebendig und zeigt euch Seine Zeichen, auf daß ihr begreifen möget.(2:73)",
				"Hierauf, nach alledem, verhärteten sich dann eure Herzen, so daß sie wie Steine waren oder noch härter. Und unter den Steinen gibt es wahrlich manche, denen Flüsse entspringen, und andere, die bersten, worauf Wasser aus ihnen herausfließt, und wieder andere, die herabstürzen aus Furcht vor Allah. Und Allah ist nicht unachtsam dessen, was ihr tut.(2:74)",
				"Begehrt ihr (Muslime) denn, daß sie (die Juden) euch glauben, wo doch eine Gruppe von ihnen das Wort Allahs gehört und es dann, nachdem er es begriffen hatte, wissentlich verfälscht hat?(2:75)",
				"Und wenn sie diejenigen treffen, die glauben, sagen sie: „Wir glauben.“ Wenn sie aber untereinander allein sind, sagen sie: „Wollt ihr ihnen erzählen, was Allah euch (Juden) enthüllt hat, damit sie es vor eurem Herrn als Beweis vorlegen? Begreift ihr denn nicht?“(2:76)",
				"Wissen sie denn nicht, daß Allah weiß, was sie geheimhalten und was sie offenlegen?(2:77)",
				"Unter ihnen gibt es auch Schriftunkundige, die die Schrift nicht kennen, sondern nur Wunschvorstellungen hegen, und die doch nur Mutmaßungen anstellen.(2:78)",
				"Doch wehe denjenigen, die die Schrift mit ihren (eigenen) Händen schreiben und hierauf sagen: „Das ist von Allah“, um sie für einen geringen Preis zu verkaufen! Wehe ihnen wegen dessen, was ihre Hände geschrieben haben, und wehe ihnen wegen dessen, was sie verdienen.(2:79)",
				"Und sie sagen: „Das (Höllen)feuer wird uns nur für gezählte Tage berühren.“ Sag: Habt ihr mit Allah einen Bund geschlossen? Dann wird Allah Seinen Bund nicht brechen. Oder wollt ihr von Allah etwas sagen, was ihr nicht wißt?(2:80)",
				"Aber nein! Wer eine böse Tat begangen hat, und wen seine Verfehlung umfangen hält, das sind Insassen des (Höllen)feuers. Ewig werden sie darin bleiben.(2:81)",
				"Diejenigen aber, die glauben und rechtschaffene Werke tun, das sind Insassen des (Paradies)gartens. Ewig werden sie darin bleiben.(2:82)",
				"Und als Wir mit den Kindern Isrāʾīls ein Abkommen trafen: Dient keinem außer Allah! Und zu den Eltern sollt ihr gütig sein und zu den Verwandten, den Waisen und den Armen! Und sagt Gutes zu den Menschen, verrichtet das Gebet und entrichtet die Abgabe. Danach kehrtet ihr euch – bis auf wenige von euch – ab; ihr seid ja Widerstrebende.(2:83)",
				"Und als Wir mit euch ein Abkommen trafen: Vergießt nicht (gegenseitig) euer Blut und vertreibt euch nicht selbst aus euren Wohnstätten! Hierauf habt ihr euch dazu bekannt und ihr seid dafür Zeugen.(2:84)",
				"Dennoch seid (gerade) ihr es, die ihr euch selbst (gegenseitig) tötet und eine Gruppe von euch aus seinen Wohnstätten vertreibt, indem ihr einander in Sünde und feindseligem Vorgehen gegen sie beisteht. Und wenn sie als Gefangene zu euch kommen, so kauft ihr sie los, wo euch doch ihre Vertreibung verboten worden ist. Glaubt ihr denn an einen Teil der Schrift und verleugnet einen anderen? Wer von euch aber solches tut, dessen Lohn ist nur Schande im diesseitigen Leben. Und am Tag der Auferstehung werden sie der schwersten Strafe zugeführt werden. Und Allah ist nicht unachtsam dessen, was ihr tut.(2:85)",
				"Das sind diejenigen, die das diesseitige Leben für das Jenseits erkauft haben. Deshalb wird ihre Strafe nicht erleichtert werden, und ihnen wird keine Hilfe zuteil.(2:86)",
				"Und Wir gaben bereits Mūsā die Schrift und ließen nach ihm die Gesandten folgen. Und Wir gaben ʿĪsā, dem Sohn Maryams, die klaren Beweise und stärkten ihn mit dem Heiligen Geist. War es nicht (so), daß jedesmal, wenn euch (Juden) ein Gesandter etwas überbrachte, was euren Neigungen nicht entsprach, ihr euch hochmütig verhieltet, indem ihr eine Gruppe (der Gesandten) der Lüge bezichtigtet und eine (andere) Gruppe tötetet?(2:87)",
				"Und sie sagen: „Unsere Herzen sind verhüllt.“ Nein! Vielmehr hat Allah sie für ihren Unglauben verflucht. Wie wenig sie glauben!(2:88)",
				"Und als von Allah ein Buch zu ihnen kam, das bestätigend, was ihnen bereits vorlag – und zuvor hatten sie um einen entscheidenden Sieg über diejenigen, die ungläubig waren, angerufen –, als nun das zu ihnen kam, was sie kannten, verleugneten sie es. Darum Allahs Fluch über die Ungläubigen!(2:89)",
				"Wie schlimm ist das, wofür sie ihre Seelen verkauft haben: daß sie das verleugnen, was Allah herabgesandt hat, aus Mißgunst (darüber), daß Allah etwas von Seiner Huld offenbart, wem von Seinen Dienern Er will! So haben sie sich Zorn über Zorn zugezogen. Und für die Ungläubigen gibt es schmachvolle Strafe.(2:90)",
				"Und wenn man zu ihnen sagt: „Glaubt an das, was Allah (als Offenbarung) herabgesandt hat“, sagen sie: „Wir glauben an das, was zu uns (schon zuvor) herabgesandt worden ist“, verleugnen aber das, was später (offenbart worden) ist, wo es doch die Wahrheit ist, das zu bestätigen, was ihnen (bereits) vorliegt. Sag: Warum habt ihr denn zuvor Allahs Propheten getötet, wenn ihr gläubig seid?(2:91)",
				"Und Mūsā war doch zu euch gekommen mit den klaren Beweisen. Aber dann nahmt ihr das Kalb an nach ihm, womit ihr Unrecht tatet.(2:92)",
				"Und als Wir mit euch ein Abkommen trafen und den Berg über euch emporhoben (und zu euch sagten): „Haltet fest an dem, was Wir euch gegeben haben und hört.“ Sie sagten: „Wir hören, doch wir widersetzen uns.“ Und es geschah ihnen durch ihren Unglauben, daß (die Liebe für) das Kalb in ihre Herzen eindrang. Sag: Wie schlimm ist das, was euch euer Glaube gebietet, wenn ihr gläubig seid!(2:93)",
				"Sag: Wenn die jenseitige Wohnstätte bei Allah euch (Juden) vorbehalten ist unter Ausschluß der (anderen) Menschen, dann wünscht (euch) den Tod, wenn ihr wahrhaftig seid!(2:94)",
				"Aber sie werden ihn sich niemals wünschen wegen dessen, was ihre Hände (an Taten) vorausgeschickt haben. Und Allah weiß über die Ungerechten Bescheid.(2:95)",
				"Und ganz gewiß wirst du sie als die gierigsten Menschen nach Leben finden, sogar mehr (noch) als diejenigen, die (Allah etwas) beigesellen. (Manch) einer von ihnen möchte gern tausend Jahre am Leben bleiben, aber selbst daß er am Leben bliebe, würde ihn nicht das der Strafe entrücken. Allah sieht wohl, was sie tun.(2:96)",
				"Sag: Wer (auch immer) Ğibrīl feind ist, so hat er ihn doch (den Qurʾān) mit Allahs Erlaubnis in dein Herz offenbart, das zu bestätigen, was vor ihm (offenbart) war, und als Rechtleitung und frohe Botschaft für die Gläubigen.(2:97)",
				"Wer Allah und Seinen Engeln und Seinen Gesandten und Ğibrīl und Mīkāl feind ist, so ist Allah den Ungläubigen feind.(2:98)",
				"Und Wir haben zu dir ja (im Qurʾān) klare Zeichen hinabgesandt. Doch nur die Frevler verleugnen sie.(2:99)",
				"Ist es nicht (so), daß jedesmal, wenn sie eine Verpflichtung eingingen, sie eine Gruppe von ihnen verworfen hat? – Nein! Vielmehr glauben die meisten von ihnen (doch) nicht.(2:100)",
				"Und als (nun) zu ihnen ein Gesandter von Allah gekommen ist, das bestätigend, was ihnen (an Offenbarungen) bereits vorlag, da hat eine Gruppe von denjenigen, denen die Schrift gegeben wurde, das Buch Allahs hinter ihren Rücken geworfen, als ob sie nicht Bescheid wüßten.(2:101)",
				"Und sie folgten dem, was die Teufel unter der Herrschaft Sulaimāns (den Menschen) verlasen. Nicht Sulaimān war ungläubig, sondern die Teufel waren es, indem sie die Menschen in der Zauberei unterwiesen und in dem, was auf die (beiden) engel(haften Männer) in Babel, Hārūt und Mārūt, herabgesandt worden war. Und sie (beide) unterwiesen niemanden (in der Zauberei), ohne zu sagen: „Wir sind nur eine Versuchung; so werde (darum) nicht ungläubig.“ Und so lernten sie von ihnen (beiden) das (Zaubermittel), womit man Zwietracht zwischen den Ehegatten stiftet. Doch können sie damit niemandem schaden, außer mit Allahs Erlaubnis. Und sie erlernten, was ihnen schadet und nicht nützt. Und sie wußten doch, daß, wer es erkaufte, am Jenseits wahrlich keinen Anteil hätte. Fürwahr, wie schlimm ist das, wofür sie ihre Seelen verkauft haben, wenn sie (es) nur wüßten!(2:102)",
				"Und wenn sie geglaubt hätten und gottesfürchtig gewesen wären, dann wäre eine Belohnung von Allah dafür wahrlich besser (als das, was sie erkauft haben), wenn sie (es) nur wüßten.(2:103)",
				"O die ihr glaubt, sagt nicht (zum Propheten): „rāʿinā“ sondern sagt: „unẓurnā“ Und hört (auf den Propheten)! Und für die Ungläubigen wird es schmerzhafte Strafe geben.(2:104)",
				"Weder diejenigen unter den Leuten der Schrift, die ungläubig sind, noch die Götzendiener möchten, daß euch etwas Gutes von eurem Herrn offenbart wird. Aber Allah zeichnet mit Seinem Erbarmen aus, wen Er will, denn Allah besitzt große Huld.(2:105)",
				"Was Wir an Versen aufheben oder in Vergessenheit geraten lassen – Wir bringen bessere oder gleichwertige dafür. Weißt du denn nicht, daß Allah zu allem die Macht hat?(2:106)",
				"Weißt du denn nicht, daß Allah es ist, Der die Herrschaft über die Himmel und die Erde hat, und daß ihr außer Allah weder Schutzherrn noch Helfer habt?(2:107)",
				"Oder wollt ihr vielmehr euren Gesandten bitten, so wie zuvor schon Mūsā gebeten worden war. Wer den Glauben mit dem Unglauben vertauscht, der ist fürwahr vom rechten Weg abgeirrt.(2:108)",
				"Viele von den Leuten der Schrift möchten euch, nachdem ihr den Glauben (angenommen) habt, wieder zu Ungläubigen machen, aus Mißgunst von sich selbst aus, nachdem ihnen die Wahrheit klargeworden ist. Doch verzeiht und seid nachsichtig, bis Allah mit Seiner Anordnung kommt! Allah hat zu allem die Macht.(2:109)",
				"Und verrichtet das Gebet und entrichtet die Abgabe. Und was ihr für euch selbst an Gutem vorausschickt, werdet ihr bei Allah finden. Was ihr tut, sieht Allah wohl.(2:110)",
				"Und sie sagen: „Niemand wird in den (Paradies)garten eingehen außer, wer Jude oder Christ ist.“ Das sind ihre Wünsche. Sag: „Bringt euren Beweis vor, wenn ihr wahrhaftig seid!“(2:111)",
				"Aber nein! Wer sich Allah völlig hingibt und dabei Gutes tut, dessen Lohn steht für ihn bei seinem Herrn. Und sie soll keine Furcht überkommen, noch sollen sie traurig sein.(2:112)",
				"Die Juden sagen: „Auf nichts fußen die Christen“; und die Christen sagen: „Auf nichts fußen die Juden“, obwohl sie doch (beide) die Schrift lesen. Dergleichen Worte führten schon diejenigen, die nicht Bescheid wissen. Aber Allah wird zwischen ihnen am Tag der Auferstehung über das richten, worüber sie uneinig sind.(2:113)",
				"Und wer ist ungerechter, als wer verhindert, daß an Allahs Gebetsstätten Sein Name genannt wird, und sich bemüht, sie zu zerstören? Jene sollen sie nur in Furcht betreten. Für sie gibt es im Diesseits Schande und im Jenseits gewaltige Strafe.(2:114)",
				"Allah gehört der Osten und der Westen; wohin ihr euch auch immer wendet, dort ist Allahs Angesicht. Allah ist Allumfassend und Allwissend.(2:115)",
				"Und sie sagen: „Allah hat Sich Kinder genommen.“ Preis sei Ihm! Nein! Vielmehr gehört Ihm (alles), was in den Himmeln und auf der Erde ist. Alle sind Ihm demütig ergeben.(2:116)",
				"(Er ist) der Schöpfer der Himmel und der Erde in ihrer schönsten Form. Und wenn Er eine Angelegenheit bestimmt, so sagt Er zu ihr nur: „Sei!“ und so ist sie.(2:117)",
				"Und diejenigen, die nicht Bescheid wissen, sagen: „O würde Allah doch zu uns sprechen oder käme zu uns ein Zeichen!“ Dergleichen Worte führten schon diejenigen, die vor ihnen waren. Ihre Herzen sind einander ähnlich. Wir haben die Zeichen klargemacht für Leute, die überzeugt sind.(2:118)",
				"Gewiß, Wir haben dich mit der Wahrheit gesandt als Frohboten und als Warner. Und du wirst nicht nach den (Taten der) Insassen des Höllenbrandes gefragt werden.(2:119)",
				"Weder die Juden noch die Christen werden mit dir zufrieden sein, bis du ihrem Glaubensbekenntnis folgst. Sag: Gewiß, Allahs Rechtleitung ist die (wahre) Rechtleitung. Wenn du jedoch ihren Neigungen folgst nach dem, was dir an Wissen zugekommen ist, so wirst du vor Allah weder Schutzherrn noch Helfer haben.(2:120)",
				"Diejenigen, denen Wir die Schrift gegeben haben, lesen sie, wie es ihr zusteht; sie glauben daran. Wer sie jedoch verleugnet, das sind die Verlierer.(2:121)",
				"O Kinder Isrāʾīls, gedenkt Meiner Gunst, die Ich euch erwiesen, und daß Ich euch vor den (anderen) Weltenbewohnern bevorzugt habe.(2:122)",
				"Und hütet euch vor einem Tag, an dem keine Seele etwas anstelle einer anderen leisten kann und von ihr keine Ersatz(leistung) angenommen wird, noch Fürsprache ihr nützt; und (an dem) ihnen keine Hilfe zuteil wird.(2:123)",
				"Und (gedenkt,) als Ibrāhīm von seinem Herrn mit Worten geprüft wurde, da befolgte er sie. Er (Allah) sagte: „Ich will dich zu einem Vorbild für die Menschen machen.“ Er (Ibrāhīm) sagte: „Und von meiner Nachkommenschaft?“ Er sagte: „Mein Bund erstreckt sich nicht auf die Ungerechten.“(2:124)",
				"Und als Wir das Haus zu einem Ort der Einkehr für die Menschen und zu einer Stätte der Sicherheit machten und (sagten): „Nehmt Ibrāhīms Standort als Gebetsplatz!“ Und Wir verpflichteten Ibrāhīm und Ismāʿīl: „Reinigt Mein Haus für diejenigen, die den Umlauf vollziehen und die sich (dort) zur Andacht zurückziehen und die sich (vor Allah) verbeugen und niederwerfen.“(2:125)",
				"Und (gedenkt,) als Ibrāhīm sagte: „Mein Herr, mache dies zu einer sicheren Ortschaft und versorge ihre Bewohner mit Früchten, wer von ihnen an Allah und den Jüngsten Tag glaubt!“ Er (Allah) sagte: „Wer aber ungläubig ist, den lasse Ich ein wenig genießen, hierauf zwinge Ich ihn in die Strafe des (Höllen)feuers – ein schlimmer Ausgang!“(2:126)",
				"Und (gedenkt,) als Ibrāhīm die Grundmauern des Hauses errichtete, zusammen mit Ismāʿīl, (da beteten sie): „Unser Herr, nimm (es) von uns an. Du bist ja der Allhörende und Allwissende.(2:127)",
				"Unser Herr, mache uns Dir ergeben und von unserer Nachkommenschaft eine Dir ergebene Gemeinschaft. Und zeige uns unsere Riten, und nimm unsere Reue an. Du bist ja der Reue-Annehmende und Barmherzige.(2:128)",
				"Unser Herr, schicke zu ihnen einen Gesandten von ihnen, der ihnen Deine Worte verliest und sie das Buch und die Weisheit lehrt und sie läutert. Du bist ja der Allmächtige und Allweise.“(2:129)",
				"Wer wird das Glaubensbekenntnis Ibrāhīms wohl verschmähen außer dem, der selbst betört ist? Wir haben ihn (Ibrāhīm) ja bereits im Diesseits auserwählt, und im Jenseits gehört er wahrlich zu den Rechtschaffenen.(2:130)",
				"(Damals,) als sein Herr zu ihm sagte: „Werde Muslim!“ Ich habe mich dem Herrn der Weltenbewohner ergeben.“(2:131)",
				"Und Ibrāhīm befahl es seinen Söhnen an – (er) und Yaʿqūb: „O meine Kinder, Allah hat euch die Religion auserwählt; so sterbt denn nicht, außer (Ihm) ergeben zu sein!“(2:132)",
				"Oder wart ihr etwa Zeugen, als Yaʿqūb der Tod nahte? Als er zu seinen Söhnen sagte: „Wem werdet ihr nach mir dienen?“ Sie sagten: „Wir werden deinem Gott und dem Gott deiner Vorväter Ibrāhīm, Ismāʿīl und Isḥāq dienen, als dem Einen Gott, und Ihm sind wir ergeben.(2:133)",
				"Das ist eine Gemeinschaft, die schon vergangen ist; ihr kommt zu, was sie verdient hat, und euch, was ihr verdient habt. Und ihr werdet nicht danach befragt werden, was jene zu tun pflegten.(2:134)",
				"Sie sagen: „Werdet Juden oder Christen, so seid ihr rechtgeleitet.“ Sag: Nein! Vielmehr das Glaubensbekenntnis Ibrāhīms, Anhängers des rechten Glaubens, und er gehörte nicht zu den Götzendienern.(2:135)",
				"Sagt: Wir glauben an Allah und an das, was zu uns (als Offenbarung) herabgesandt worden ist, und an das, was zu Ibrāhīm, Ismāʿīl, Isḥāq, Yaʿqūb und den Stämmen herabgesandt wurde, und (an das,) was Mūsā und ʿĪsā gegeben wurde, und (an das,) was den Propheten von ihrem Herrn gegeben wurde. Wir machen keinen Unterschied bei jemandem von ihnen, und wir sind Ihm ergeben.(2:136)",
				"Wenn sie an das gleiche glauben, woran ihr glaubt, dann sind sie somit rechtgeleitet. Wenn sie sich jedoch abkehren, dann befinden sie sich in Widerstreit. Aber gegen sie wird Allah dir genügen. Er ist der Allhörende und Allwissende.(2:137)",
				"Allahs Farbgebung – und wessen Farbgebung ist besser als diejenige Allahs! Und Ihm dienen wir.(2:138)",
				"Sag: Wollt ihr mit uns über Allah streiten, wo Er doch unser und euer Herr ist? Für uns sind unsere Werke und für euch eure Werke. Und wir sind Ihm aufrichtig zugetan.(2:139)",
				"Oder wollt ihr etwa sagen, Ibrāhīm, Ismāʿīl, Isḥāq, Yaʿqūb und die Stämme seien Juden oder Christen gewesen? – Sag: Wißt ihr es besser oder Allah? – Wer ist ungerechter, als wer ein Zeugnis von Allah bei sich verheimlicht? Und Allah ist nicht unachtsam dessen, was ihr tut.(2:140)",
				"Das ist eine Gemeinschaft, die schon vergangen ist; ihr kommt zu, was sie verdient hat und euch, was ihr verdient habt. Und ihr werdet nicht danach befragt werden, was jene zu tun pflegten.(2:141)",
				"Die Toren unter den Menschen werden sagen: „Was hat sie von der Gebetsrichtung, die sie (bisher) einhielten, abgebracht?“ Sag: Allah gehört der Osten und der Westen. Er leitet, wen Er will, auf einen geraden Weg.(2:142)",
				"Und so haben Wir euch zu einer Gemeinschaft der Mitte gemacht, damit ihr Zeugen über die (anderen) Menschen seiet und damit der Gesandte über euch Zeuge sei. Wir hatten die Gebetsrichtung, die du einhieltest, nur bestimmt, um zu wissen, wer dem Gesandten folgt und wer sich auf den Fersen umkehrt. Und es ist wahrlich schwer außer für diejenigen, die Allah rechtgeleitet hat. Aber Allah läßt nicht zu, daß euer Glaube verlorengeht. Allah ist zu den Menschen wahrlich Gnädig, Barmherzig.(2:143)",
				"Wir sehen ja dein Gesicht sich (suchend) zum Himmel wenden. Nun wollen Wir dir ganz gewiß eine Gebetsrichtung zuweisen, mit der du zufrieden bist. So wende dein Gesicht in Richtung der geschützten Gebetsstätte! Und wo immer ihr seid, wendet eure Gesichter in ihrer Richtung! Diejenigen, denen die Schrift gegeben wurde, wissen sehr wohl, daß dies die Wahrheit von ihrem Herrn ist. Und Allah ist nicht unachtsam dessen, was sie tun.(2:144)",
				"Selbst wenn du zu denjenigen, denen die Schrift gegeben wurde, mit jeglichen Zeichen kämest, würden sie doch nicht deiner Gebetsrichtung folgen; noch folgst du ihrer Gebetsrichtung. Und auch untereinander folgen sie nicht der Gebetsrichtung der anderen. Würdest du aber ihren Neigungen folgen, nach all dem, was dir an Wissen zugekommen ist, dann gehörtest du wahrlich zu den Ungerechten.(2:145)",
				"Diejenigen, denen Wir die Schrift gegeben haben, kennen es, wie sie ihre Söhne kennen. Aber ein Teil von ihnen verheimlicht wahrlich die Wahrheit, obwohl sie (sie) wissen.(2:146)",
				"(Es ist) die Wahrheit von deinem Herrn, gehöre daher nicht zu den Zweiflern!(2:147)",
				"Jeder hat eine Zielrichtung, zu der er sich hinwendet. So wetteifert nach den guten Dingen! Wo immer ihr auch sein werdet, Allah wird euch alle herbeibringen. Allah hat zu allem die Macht.(2:148)",
				"Und woher du immer heraustrittst, da wende dein Gesicht in Richtung der geschützten Gebetsstätte. Es ist wirklich die Wahrheit von deinem Herrn. Und Allah ist nicht unachtsam dessen, was ihr tut.(2:149)",
				"Und woher du immer heraustrittst, da wende dein Gesicht in Richtung der geschützten Gebetsstätte. Und wo immer ihr seid, da wendet eure Gesichter in ihrer Richtung, damit die Menschen kein Beweismittel gegen euch haben, außer denjenigen von ihnen, die Unrecht tun. – So fürchtet nicht sie, sondern fürchtet Mich! – Und damit Ich Meine Gunst an euch vollende, auf daß ihr rechtgeleitet werden möget.(2:150)",
				"So, wie Wir zu euch einen Gesandten von euch geschickt haben, der euch Unsere Worte verliest und euch läutert und euch die Schrift und die Wahrheit lehrt und euch lehrt, was ihr nicht wußtet.(2:151)",
				"Gedenkt Meiner, so gedenke Ich eurer. Seid Mir dankbar und seid nicht undankbar gegen Mich.(2:152)",
				"O die ihr glaubt, sucht Hilfe in der Standhaftigkeit und im Gebet! Allah ist mit den Standhaften.(2:153)",
				"Und sagt nicht von denen, die auf Allahs Weg getötet werden, sie seien tot! Nein! Vielmehr sind sie lebendig; aber ihr nehmt es nicht wahr.(2:154)",
				"Und Wir werden euch ganz gewiß mit ein wenig Furcht und Hunger und Mangel an Besitz, Seelen und Früchten prüfen. Doch verkünde frohe Botschaft den Standhaften,(2:155)",
				"die, wenn sie ein Unglück trifft, sagen: „Wir gehören Allah, und zu Ihm kehren wir zurück.“(2:156)",
				"Sie sind es, denen Segnungen von ihrem Herrn und Erbarmen zuteil werden, und sie sind die Rechtgeleiteten.(2:157)",
				"Gewiß, aṣ-Ṣafā und al-Marwa gehören zu den (Orten der) Kulthandlungen Allahs. Wenn einer die Pilgerfahrt zum Hause oder die Besuchsfahrt vollzieht, so ist es keine Sünde für ihn, wenn er zwischen ihnen (beiden) den Umgang macht. Und wer (von sich aus) freiwillig Gutes tut, so ist Allah Dankbar und Allwissend.(2:158)",
				"Diejenigen, die verheimlichen, was Wir an klaren Beweisen und Rechtleitung hinabgesandt haben, nachdem Wir es den Menschen in der Schrift klar gemacht haben, sie werden von Allah verflucht und auch von den Fluchenden, –(2:159)",
				"außer denjenigen, die bereuen und verbessern und klar machen. Ihre Reue nehme Ich an, Ich bin ja der Reue-Annehmende und Barmherzige.(2:160)",
				"Diejenigen aber, die ungläubig sind und als Ungläubige sterben, auf ihnen liegt der Fluch Allahs und der Engel und der Menschen allesamt,(2:161)",
				"ewig darin zu bleiben. Die Strafe soll ihnen nicht erleichtert noch soll ihnen Aufschub gewährt werden.(2:162)",
				"Euer Gott ist ein Einziger Gott. Es gibt keinen Gott außer Ihm, dem Allerbarmer, dem Barmherzigen.(2:163)",
				"In der Schöpfung der Himmel und der Erde; im Unterschied von Nacht und Tag; in den Schiffen, die das Meer befahren mit dem, was den Menschen nützt; darin, daß Allah Wasser vom Himmel herabkommen läßt, und damit dann die Erde nach ihrem Tod wieder lebendig macht und auf ihr allerlei Tiere sich ausbreiten läßt; und im Wechsel der Winde und der Wolken, die zwischen Himmel und Erde dienstbar gemacht sind, sind wahrlich Zeichen für Leute, die begreifen.(2:164)",
				"Und doch gibt es unter den Menschen manche, die außer Allah andere als Seinesgleichen annehmen und ihnen dieselbe Liebe schenken wie Allah. Aber diejenigen, die (wirklich) glauben, sind stärker in ihrer Liebe zu Allah. Und wenn doch diejenigen, die Unrecht tun, wenn sie der Strafe angesichtig werden, erkennen würden, daß alle Stärke Allah gehört und daß Allah streng im Strafen ist.(2:165)",
				"Wenn diejenigen, denen Gefolgschaft geleistet worden ist, sich von denen lossagen, die Gefolgschaft geleistet haben, und sie die Strafe sehen und die Verbindungsstricke zu ihnen abgeschnitten sind!(2:166)",
				"Und diejenigen, die Gefolgschaft geleistet haben, sagen: „Hätten wir doch eine (Möglichkeit zur) Wiederholung, dann würden wir uns von ihnen lossagen, so wie sie sich von uns losgesagt haben.“ So wird Allah ihnen ihre Werke zeigen, als gramvolle Reue für sie. Und sie werden aus dem (Höllen)feuer nicht herauskommen.(2:167)",
				"O ihr Menschen! Eßt von dem, was es auf der Erde gibt, als etwas Erlaubtem und Gutem, und folgt nicht den Fußstapfen des Satans! Er ist euch ein deutlicher Feind.(2:168)",
				"Er befiehlt euch nur Böses und Schändliches, und daß ihr gegen Allah aussagen sollt, was ihr nicht wißt.(2:169)",
				"Und wenn man zu ihnen sagt: „Folgt dem, was Allah herabgesandt hat“, sagen sie: „Nein! Vielmehr folgen wir dem, worin wir unsere Väter vorgefunden haben.“ Was denn, auch wenn ihre Väter nichts begriffen und nicht rechtgeleitet waren?(2:170)",
				"Das Gleichnis derjenigen, die ungläubig sind, ist wie jemand, der etwas nachschreit, was nichts hört außer Stimmen und Zurufen. Taub, stumm, blind; so begreifen sie nicht.(2:171)",
				"O die ihr glaubt, eßt von den guten Dingen, mit denen Wir euch versorgt haben, und seid Allah dankbar, wenn ihr Ihm (allein) dient!(2:172)",
				"Verboten hat Er euch nur (den Genuß von) Verendetem, Blut, Schweinefleisch und dem, worüber ein anderer (Name) als Allah(s) angerufen worden ist. Wer sich aber in einer Zwangslage befindet, ohne zu begehren oder das Maß zu überschreiten, für den ist es keine Sünde. Allah ist Allvergebend und Barmherzig.(2:173)",
				"Diejenigen, die verheimlichen, was Allah von der Schrift herabgesandt hat, und es für einen geringen Preis verkaufen, sie verzehren in ihren Bäuchen nichts als Feuer. Und Allah wird zu ihnen am Tag der Auferstehung weder sprechen noch sie läutern. Für sie wird es schmerzhafte Strafe geben.(2:174)",
				"Das sind diejenigen, die das Irregehen für die Rechtleitung erkauft haben und die Strafe für die Vergebung. Wie beharrlich sind sie gegenüber dem (Höllen)feuer!(2:175)",
				"Dies, weil Allah die Schrift mit der Wahrheit offenbart hat. Und diejenigen, die über die Schrift uneinig sind, befinden sich wahrlich in tiefem Widerstreit.(2:176)",
				"Nicht darin besteht die Güte, daß ihr eure Gesichter gegen Osten oder Westen wendet. Güte ist vielmehr, daß man an Allah, den Jüngsten Tag, die Engel, die Bücher und die Propheten glaubt und vom Besitz – obwohl man ihn liebt – der Verwandtschaft, den Waisen, den Armen, dem Sohn des Weges, den Bettlern und für (den Loskauf von) Sklaven hergibt, das Gebet verrichtet und die Abgabe entrichtet; und diejenigen, die ihre Verpflichtung einhalten, wenn sie eine eingegangen sind, und diejenigen, die standhaft bleiben in Not, Leid und in Kriegszeiten, das sind diejenigen, die wahrhaftig sind, und das sind die Gottesfürchtigen.(2:177)",
				"O die ihr glaubt, vorgeschrieben ist euch Wiedervergeltung für die Getöteten: der Freie für den Freien, der Sklave für den Sklaven und das Weib für das Weib. Doch wenn einem von seinem Bruder etwas erlassen wird, so soll die Verfolgung (der Ansprüche) in rechtlicher Weise und die Zahlungsleistung an ihn auf ordentliche Weise geschehen. Das ist eine Erleichterung von eurem Herrn und Erbarmung. Wer aber nach diesem eine Übertretung begeht, für den gibt es schmerzhafte Strafe.(2:178)",
				"In der Wiedervergeltung liegt Leben für euch, o die ihr Verstand besitzt, auf daß ihr gottesfürchtig werden möget!(2:179)",
				"Vorgeschrieben ist euch, wenn sich einem von euch der Tod naht, sofern er Gut hinterläßt, ein Vermächtnis zugunsten der Eltern und nächsten Verwandten in rechtlicher Weise zu treffen, als eine Pflicht für die Gottesfürchtigen.(2:180)",
				"Wer es aber abändert – nachdem er es gehört hat –, so liegt dessen Sünde nur bei demjenigen, der es abändert. Allah ist Allhörend und Allwissend.(2:181)",
				"Wer aber von Seiten eines Erblassers Abweichung oder Sünde befürchtet und zwischen ihnen schlichtet, den trifft keine Sünde. Allah ist Allvergebend und Barmherzig.(2:182)",
				"O die ihr glaubt, vorgeschrieben ist euch das Fasten, so wie es denjenigen vor euch vorgeschrieben war, auf daß ihr gottesfürchtig werden möget.(2:183)",
				"(Vorgeschrieben ist es euch) an bestimmten Tagen. Wer von euch jedoch krank ist oder sich auf einer Reise befindet, der soll eine (gleiche) Anzahl von anderen Tagen (fasten). Und denjenigen, die es zu leisten vermögen, ist als Ersatz die Speisung eines Armen auferlegt. Wer aber freiwillig Gutes tut, für den ist es besser. Und daß ihr fastet, ist besser für euch, wenn ihr (es) nur wißt!(2:184)",
				"Der Monat Ramaḍān (ist es), in dem der Qurʾān als Rechtleitung für die Menschen herabgesandt worden ist und als klare Beweise der Rechtleitung und der Unterscheidung. Wer also von euch während dieses Monats anwesend ist, der soll ihn fasten, wer jedoch krank ist oder sich auf einer Reise befindet, (der soll) eine (gleiche) Anzahl von anderen Tagen (fasten). Allah will für euch Erleichterung; Er will für euch nicht Erschwernis, – damit ihr die Anzahl vollendet und Allah als den Größten preist, dafür, daß Er euch rechtgeleitet hat, auf daß ihr dankbar sein möget.(2:185)",
				"Und wenn dich Meine Diener nach Mir fragen, so bin Ich nahe; Ich erhöre den Ruf des Bittenden, wenn er Mich anruft. So sollen sie nun auf Mich hören und an Mich glauben, auf daß sie besonnen handeln mögen.(2:186)",
				"Erlaubt ist euch, in der Nacht des Fastens mit euren Frauen Beischlaf auszuüben; sie sind euch ein Kleid, und ihr seid ihnen ein Kleid. Allah weiß, daß ihr euch selbst (immer wieder) betrogt, und da hat Er eure Reue angenommen und euch verziehen. Von jetzt an verkehrt mit ihnen und trachtet nach dem, was Allah für euch bestimmt hat, und eßt und trinkt, bis sich für euch der weiße vom schwarzen Faden der Morgendämmerung klar unterscheidet! Hierauf vollzieht das Fasten bis zur Nacht! Und verkehrt nicht mit ihnen, während ihr euch (zur Andacht) in die Gebetsstätten zurückgezogen habt! Dies sind Allahs Grenzen, so kommt ihnen nicht zu nahe! So macht Allah den Menschen Seine Zeichen klar, auf daß sie gottesfürchtig werden mögen.(2:187)",
				"Und zehrt nicht euren Besitz untereinander auf nichtige Weise auf und bestecht nicht damit die Richter, um einen Teil des Besitzes der Menschen in sündhafter Weise zu verzehren, wo ihr (es) doch wißt.(2:188)",
				"Sie fragen dich nach den Jungmonden. Sag: Sie sind festgesetzte Zeiten für die Menschen und für die Pilgerfahrt. Und nicht darin besteht die Frömmigkeit, daß ihr von der Rückseite in die Häuser kommt. Frömmigkeit besteht vielmehr darin, daß man gottesfürchtig ist. So kommt durch die Türen in die Häuser und fürchtet Allah, auf daß es euch wohl ergehen möge!(2:189)",
				"Und kämpft auf Allahs Weg gegen diejenigen, die gegen euch kämpfen, doch übertretet nicht! Allah liebt nicht die Übertreter.(2:190)",
				"Und tötet sie, wo immer ihr auf sie trefft, und vertreibt sie, von wo sie euch vertrieben haben, denn Verfolgung ist schlimmer als Töten! Kämpft jedoch nicht gegen sie bei der geschützten Gebetsstätte, bis sie dort (zuerst) gegen euch kämpfen. Wenn sie aber (dort) gegen euch kämpfen, dann tötet sie. Solcherart ist der Lohn der Ungläubigen.(2:191)",
				"Wenn sie jedoch aufhören, so ist Allah Allvergebend und Barmherzig.(2:192).",
				"Und kämpft gegen sie, bis es keine Verfolgung mehr gibt und die Religion (allein) Allahs ist. Wenn sie jedoch aufhören, dann darf es kein feindseliges Vorgehen geben außer gegen die Ungerechten.(2:193)",
				"Der Schutzmonat ist für den Schutzmonat, und (für) die unantastbaren Dinge ist Wiedervergeltung. Wenn jemand gegen euch übertritt, dann geht (auch ihr) in gleichem Maß gegen ihn vor, wie er gegen euch übertreten hat. Und fürchtet Allah und wißt, daß Allah mit den Gottesfürchtigen ist.(2:194)",
				"Und gebt auf Allahs Weg aus und stürzt euch nicht mit eigener Hand ins Verderben. Und tut Gutes. Allah liebt die Gutes Tuenden.(2:195)",
				"Vollzieht die Pilgerfahrt und die Besuchsfahrt für Allah. Wenn ihr jedoch (daran) gehindert werdet, dann (bringt) an Opfertieren (dar), was euch leichtfällt. Und schert euch nicht die Köpfe, bevor die Opfertiere ihren Schlachtort erreicht haben! Wer von euch krank ist oder ein Leiden an seinem Kopf hat, der soll Ersatz leisten mit Fasten, Almosen oder Opferung eines Schlachttieres. – Wenn ihr aber in Sicherheit seid, dann soll derjenige, der die Besuchsfahrt mit der Pilgerfahrt durchführen möchte, an Opfertieren (darbringen), was ihm leichtfällt. Wer jedoch nicht(s) finden kann, der soll drei Tage während der Pilgerfahrt fasten und sieben, wenn ihr zurückgekehrt seid; das sind im ganzen zehn. Dies (gilt nur) für den, dessen Angehörige nicht in der geschützten Gebetsstätte wohnhaft sind. Und fürchtet Allah und wißt, daß Allah streng im Bestrafen ist!(2:196)",
				"Die (Zeit der) Pilgerfahrt (sind) bekannte Monate. Wer in ihnen die (Durchführung der) Pilgerfahrt beschlossen hat, der darf keinen Beischlaf ausüben, keinen Frevel begehen und nicht Streit führen während der Pilgerfahrt. Und was ihr an Gutem tut, Allah weiß es. Und versorgt euch mit Reisevorrat, doch der beste Vorrat ist die Gottesfurcht. Und fürchtet Mich, o die ihr Verstand besitzt!(2:197)",
				"Es ist keine Sünde für euch, daß ihr nach Huld von eurem Herrn trachtet. Doch wenn ihr von ʿArafāt hergeströmt seid, dann gedenkt Allahs bei der geschützten Kultstätte. Und gedenkt Seiner, wie Er euch rechtgeleitet hat, obwohl ihr vordem wahrlich zu den Irregehenden gehörtet.(2:198)",
				"Hierauf strömt weiter, woher die (anderen) Menschen weiterströmen, und bittet Allah um Vergebung. Allah ist Allvergebend und Barmherzig.(2:199)",
				"Wenn ihr dann eure Riten vollzogen habt, dann gedenkt Allahs, wie ihr eurer Väter gedenkt, oder mit noch innigerem Gedenken. Unter den Menschen gibt es manch einen, der sagt: „Unser Herr, gib uns im Diesseits!“ Doch hat er am Jenseits keinen Anteil.(2:200)",
				"Unter ihnen gibt es aber auch solche, die sagen: „Unser Herr, gib uns im Diesseits Gutes und im Jenseits Gutes, und bewahre uns vor der Strafe des (Höllen)feuers!(2:201)",
				"Für jene gibt es einen Anteil an dem, was sie verdient haben. Und Allah ist schnell im Abrechnen.(2:202)",
				"Und gedenkt Allahs während einer bestimmten Anzahl von Tagen. Wer sich jedoch in zwei Tagen (mit dem Aufbruch) beeilt, den trifft keine Sünde, und wer länger bleibt, den trifft keine Sünde; (das gilt) für den, der gottesfürchtig ist. Fürchtet Allah und wißt, daß ihr zu Ihm versammelt werdet!(2:203)",
				"Und gedenkt Allahs während einer bestimmten Anzahl von Tagen. Wer sich jedoch in zwei Tagen (mit dem Aufbruch) beeilt, den trifft keine Sünde, und wer länger bleibt, den trifft keine Sünde; (das gilt) für den, der gottesfürchtig ist. Fürchtet Allah und wißt, daß ihr zu Ihm versammelt werdet!(2:204)",
				"Wenn er sich abkehrt, bemüht er sich eifrig darum, auf der Erde Unheil zu stiften und Saatfelder und Nachkommenschaft zu vernichten. Aber Allah liebt nicht das Unheil.(2:205)",
				"Und wenn man zu ihm sagt: „Fürchte Allah“, reißt ihn der Stolz zur Sünde hin. Die Hölle soll seine Genüge sein – wahrlich eine schlimme Lagerstatt!(2:206)",
				"Unter den Menschen gibt es (auch) manchen, der sich selbst im Trachten nach Allahs Zufriedenheit verkauft. Und Allah ist zu den Menschen Gnädig.(2:207)",
				"O die ihr glaubt, tretet allesamt in den Islām ein und folgt nicht den Fußstapfen des Satans! Er ist euch ja ein deutlicher Feind.(2:208)",
				"Wenn ihr aber strauchelt, nachdem die klaren Beweise zu euch gekommen sind, so wißt, daß Allah Allmächtig und Allweise ist.(2:209)",
				"Erwarten sie (etwas anderes), als daß Allah in Schattendächern aus Wolken zu ihnen kommt und die Engel? Doch dann wird die Angelegenheit entschieden sein. Und zu Allah werden (all) die Angelegenheiten zurückgebracht.(2:210)",
				"Frage die Kinder Isrāʾīls, wie viele klare Beweise Wir ihnen gegeben haben. Wenn aber einer die Gunst Allahs abändert, nachdem sie ihm zuteil geworden ist –, dann ist Allah streng im Bestrafen.(2:211)",
				"Ausgeschmückt ist denen, die ungläubig sind, das diesseitige Leben, und sie spotten über diejenigen, die glauben. Aber diejenigen, die gottesfürchtig sind, werden am Tag der Auferstehung über ihnen stehen. Und Allah versorgt, wen Er will, ohne zu berechnen.(2:212)",
				"Die Menschen waren eine einzige Gemeinschaft. Dann schickte Allah die Propheten als Verkünder froher Botschaft und als Überbringer von Warnungen und sandte mit ihnen die Bücher mit der Wahrheit herab, um zwischen den Menschen über das zu richten, worüber sie uneinig waren. Doch nur diejenigen waren – aus Mißgunst untereinander – darüber uneinig, denen sie gegeben wurden, nachdem die klaren Beweise zu ihnen gekommen waren. Und so hat Allah mit Seiner Erlaubnis diejenigen, die glauben, zu der Wahrheit geleitet, über die sie uneinig waren. Und Allah leitet, wen Er will, auf einen geraden Weg.(2:213)",
				"Oder meint ihr etwa, daß ihr in den (Paradies)garten eingehen werdet, noch bevor Gleiches über euch gekommen ist, wie über diejenigen, die vor euch dahingegangen sind? Not und Leid widerfuhr ihnen, und sie wurden erschüttert, bis daß der Gesandte und diejenigen, die mit ihm glaubten, sagten: „Wann kommt Allahs Sieg?“ Aber wahrlich, Allahs Sieg ist nahe.(2:214)",
				"Sie fragen dich, was sie ausgeben sollen. Sag: Was immer ihr an Gutem ausgebt, soll den Eltern, den nächsten Verwandten, den Waisen, den Armen und dem Sohn des Weges zukommen. Und was immer ihr an Gutem tut, so weiß Allah darüber Bescheid.(2:215)",
				"Vorgeschrieben ist euch zu kämpfen, obwohl es euch zuwider ist. Aber vielleicht ist euch etwas zuwider, während es gut für euch ist, und vielleicht ist euch etwas lieb, während es schlecht für euch ist. Allah weiß, ihr aber wißt nicht.(2:216)",
				"Sie fragen dich nach dem Schutzmonat, danach, in ihm zu kämpfen. Sag: In ihm zu kämpfen ist schwerwiegend. Aber von Allahs Weg abzuhalten – und Ihn zu verleugnen –, und von der geschützten Gebetsstätte (abzuhalten) und deren Anwohner von ihr vertreiben, ist (noch) schwerwiegender bei Allah. Und Verfolgung ist schwerwiegender als Töten. Und sie werden nicht eher aufhören, gegen euch zu kämpfen, bis sie euch von eurer Religion abgekehrt haben – wenn sie (es) können. Wer aber unter euch sich von seiner Religion abkehrt und dann als Ungläubiger stirbt –, das sind diejenigen, deren Werke im Diesseits und im Jenseits hinfällig werden. Das sind Insassen des (Höllen)feuers. Ewig werden sie darin bleiben.(2:217)",
				"Diejenigen (aber), die glauben, und diejenigen, die auswandern und sich auf Allahs Weg abmühen, sie hoffen auf Allahs Erbarmen. Allah ist Allvergebend und Barmherzig.(2:218)",
				"Sie fragen dich nach berauschendem Trunk und Glücksspiel. Sag: In ihnen (beiden) liegt große Sünde und Nutzen für die Menschen. Aber die Sünde in ihnen (beiden) ist größer als ihr Nutzen. Und sie fragen dich, was sie ausgeben sollen. Sag: Den Überschuß. So macht Allah euch die Zeichen klar, auf daß ihr nachdenken möget,(2:219)",
				"über das Diesseits und das Jenseits. Und sie fragen dich nach den Waisen. Sag: Ihre Lage zu verbessern ist besser. Und wenn ihr euch mit ihnen zusammentut, so sind sie eure Brüder. Allah weiß den Unheilstifter vom Heilstifter (zu unterscheiden). Und wenn Allah gewollt hätte, hätte Er euch wahrlich in Bedrängnis gebracht. Allah ist Allmächtig und Allweise.(2:220)",
				"Und heiratet Götzendienerinnen nicht, bevor sie glauben. Und eine gläubige Sklavin ist fürwahr besser als eine Götzendienerin, auch wenn diese euch gefallen sollte. Und verheiratet nicht (gläubige Frauen) mit Götzendienern, bevor sie glauben. Und ein gläubiger Sklave ist fürwahr besser als ein Götzendiener, auch wenn dieser euch gefallen sollte. Jene laden zum (Höllen)feuer ein. Allah aber lädt zum (Paradies)garten und zur Vergebung ein, mit Seiner Erlaubnis, und macht den Menschen Seine Zeichen klar, auf daß sie bedenken mögen.(2:221)",
				"Sie fragen dich nach der Monatsblutung. Sag: Sie ist ein Leiden. So haltet euch von den Frauen während der Monatsblutung fern, und kommt ihnen nicht nahe, bis sie rein sind. Wenn sie sich dann gereinigt haben, so kommt zu ihnen, wie Allah es euch geboten hat. Allah liebt die Reumütigen, und Er liebt die, die sich rein halten.(2:222)",
				"Eure Frauen sind euch ein Saatfeld. So kommt zu eurem Saatfeld, wann und wie ihr wollt. Doch schickt (Gutes) für euch selbst voraus. Und fürchtet Allah und wißt, daß ihr Ihm begegnen werdet. Und verkünde den Gläubigen frohe Botschaft.(2:223)",
				"Und macht nicht Allah mit euren Eiden zu einem Hinderungsgrund, gütig und gottesfürchtig zu sein und zwischen den Menschen Frieden zu stiften. Allah ist Allhörend und Allwissend.(2:224)",
				"Allah wird euch nicht für etwas Unbedachtes in euren Eiden belangen. Jedoch wird Er euch für das belangen, was eure Herzen erworben haben. Allah ist Allvergebend und Nachsichtig.(2:225)",
				"Diejenigen, die schwören, sich ihrer Frauen zu enthalten, haben eine Wartezeit von vier Monaten. Wenn sie dann (von ihrem Schwur) zurücktreten, so ist Allah Allvergebend und Barmherzig.(2:226)",
				"Wenn sie aber zur Scheidung entschlossen sind, so ist Allah Allhörend und Allwissend.(2:227)",
				"Geschiedene Frauen sollen (mit sich) selbst drei Zeitabschnitte abwarten. Und es ist ihnen nicht erlaubt, zu verheimlichen, was Allah in ihrem Mutterleib erschaffen hat, wenn sie an Allah und den Jüngsten Tag glauben. Und ihre Ehemänner haben ein größeres Anrecht, sie zurückzunehmen, wenn sie eine Aussöhnung wollen. Und ihnen (den Frauen) steht in rechtlicher Weise (gegenüber den Männern) das gleiche zu, wie (den Männern) gegenüber ihnen. Doch die Männer haben ihnen gegenüber einen gewissen Vorzug. Und Allah ist Allmächtig und Allweise.(2:228)",
				"Die (widerrufliche) Scheidung ist zweimal (erlaubt). Dann (sollen die Frauen) in rechtlicher Weise behalten oder in ordentlicher Weise freigegeben (werden). Und es ist euch nicht erlaubt, etwas von dem, was ihr ihnen gegeben habt, (wieder) zu nehmen, außer wenn die beiden fürchten, daß sie Allahs Grenzen nicht einhalten werden. Wenn ihr aber befürchtet, daß die beiden Allahs Grenzen nicht einhalten werden, dann ist für die beiden keine Sünde in dem, womit (an Geld) sie sich löst. Dies sind Allahs Grenzen, so übertretet sie nicht! Wer aber Allahs Grenzen übertritt, diejenigen sind die Ungerechten.(2:229)",
				"Wenn er sich (ein drittes, unwiderrufliches Mal) von ihr scheidet, dann ist sie ihm nicht mehr (als Gattin) erlaubt, bevor sie nicht einen anderen Mann geheiratet hat. Wenn dieser sich von ihr scheidet, so ist es keine Sünde für die beiden, zu einander zurückzukehren, wenn sie (dabei) glauben, Allahs Grenzen einhalten zu können. Dies sind Allahs Grenzen, die Er Leuten klar macht, die Bescheid wissen.(2:230)",
				"Und wenn ihr euch von Frauen scheidet und sie dann ihre festgesetzte Zeit erreichen, so behaltet sie in rechtlicher Weise oder gebt sie in rechtlicher Weise frei. Doch behaltet sie nicht mit der Absicht der Schädigung, so daß ihr übertretet. Wer dies tut, der fügt sich ja selbst Unrecht zu. Und macht euch nicht über Allahs Zeichen lustig. Und gedenkt Allahs Gunst an euch und dessen, was Er von dem Buch und an Weisheit auf euch herabgesandt hat, um euch damit zu ermahnen. Und fürchtet Allah und wißt, daß Allah über alles Bescheid weiß.(2:231)",
				"Und wenn ihr euch von Frauen scheidet und sie dann ihre festgesetzte Zeit erreicht haben, so haltet sie nicht davon ab, ihre Gatten zu heiraten, wenn sie sich in rechtlicher Weise miteinander geeinigt haben. Damit wird von euch ermahnt, wer an Allah und den Jüngsten Tag glaubt. Das ist lauterer für euch und reiner. Allah weiß, ihr aber wißt nicht.(2:232)",
				"Und die Mütter stillen ihre Kinder zwei volle Jahre. (Das gilt) für jemanden, der das Stillen zu Ende führen will. Und demjenigen, dem das Kind geboren wurde, obliegt es, für ihre Versorgung und Kleidung in rechtlicher Weise aufzukommen. Keiner Seele wird mehr auferlegt, als sie zu leisten vermag. Keine Mutter soll wegen ihres Kindes zu Schaden kommen, noch einer, dem das Kind geboren wurde, wegen seines Kindes. Und dem Erben obliegt das gleiche. Wenn sie beide jedoch in gegenseitigem Einvernehmen und gemeinsamer Beratung (das Kind vorzeitig) entwöhnen wollen, so ist darin keine Sünde für sie (beide). Und wenn ihr eure Kinder (von einer Amme) stillen lassen wollt, so ist darin keine Sünde für euch, sofern ihr das, was ihr geben wollt, in rechtlicher Weise aushändigt. Und fürchtet Allah und wißt, daß Allah das, was ihr tut, wohl sieht!(2:233)",
				"Und diejenigen von euch, die abberufen werden und Gattinnen hinterlassen – so sollen diese (mit sich) selbst vier Monate und zehn (Tage) abwarten. Wenn sie dann ihre festgesetzte Zeit erreicht haben, so ist für euch keine Sünde in dem, was sie in rechtlicher Weise mit sich selbst unternehmen. Allah ist dessen, was ihr tut, Kundig.(2:234)",
				"Und es ist für euch keine Sünde darin, daß ihr den Frauen Andeutungen auf einen Heiratsantrag macht, oder daß ihr etwas (derartiges) in euch hegt. Allah weiß, daß ihr an sie denken werdet. Aber trefft nicht heimlich eine Abmachung mit ihnen, außer ihr sagt geziemende Worte. Und schließt nicht den Ehebund, bevor die vorgeschriebene Frist ihre festgesetzte Zeit erreicht hat. Wißt, daß Allah weiß, was in eurem Innersten ist. So seht euch vor Ihm vor! Und wißt, daß Allah Allvergebend und Nachsichtig ist.(2:235)",
				"Es ist für euch keine Sünde darin, wenn ihr euch von Frauen scheidet, solange ihr sie noch nicht berührt oder euch ihnen gegenüber (zu einer Morgengabe) verpflichtet habt. Doch gewährt ihnen eine Abfindung – der Wohlhabende entsprechend seinen Verhältnissen und der Geringbemittelte entsprechend seinen Verhältnissen –, eine Abfindung in rechtlicher Weise. (Dies ist) eine Pflicht für die Gutes Tuenden.(2:236)",
				"Aber wenn ihr euch von ihnen scheidet, bevor ihr sie berührt und euch ihnen gegenüber schon (zu einer Morgengabe) verpflichtet habt, dann (händigt) die Hälfte dessen (aus), wozu ihr euch verpflichtet habt, es sei denn, daß sie (es) erlassen oder der, in dessen Hand der Ehebund ist. Und wenn ihr (es) erlaßt, kommt das der Gottesfurcht näher. Und versäumt es nicht, gut zueinander zu sein. Was ihr tut, sieht Allah wohl.(2:237)",
				"Haltet die Gebete ein, und (besonders) das mittlere Gebet, und steht demütig ergeben vor Allah.(2:238)",
				"Wenn ihr in Furcht seid, dann (verrichtet das Gebet) zu Fuß oder im Reiten. Wenn ihr aber (wieder) in Sicherheit seid, dann gedenkt Allahs, wie Er euch gelehrt hat, was ihr nicht wußtet.(2:239)",
				"Diejenigen von euch, die abberufen werden und Gattinnen hinterlassen, sollen ihren Gattinnen eine Abfindung für ein Jahr vermachen, ohne daß sie aus (dem Haus) gewiesen werden. Wenn sie aber ausziehen, so liegt für euch keine Sünde in dem, was sie mit sich selbst an Geziemendem unternehmen. Allah ist Allmächtig und Allweise.(2:240)",
				"Und den geschiedenen Frauen steht eine Abfindung in rechtlicher Weise zu – eine Pflicht für die Gottesfürchtigen.(2:241)",
				"So macht Allah euch Seine Zeichen klar, auf daß ihr begreifen möget.(2:242)",
				"Siehst du nicht jene, die, um dem Tod zu entfliehen, zu Tausenden aus ihren Wohnstätten hinauszogen? Da sagte Allah zu ihnen: „Sterbt!“ Hierauf machte Er sie wieder lebendig. Allah ist wahrlich voll Huld gegen die Menschen. Aber die meisten Menschen sind nicht dankbar.(2:243)",
				"Und kämpft auf Allahs Weg und wißt, daß Allah Allhörend und Allwissend ist.(2:244)",
				"Wer ist es denn, der Allah ein schönes Darlehen gibt? So vermehrt Er es ihm um ein Vielfaches. Allah hält zurück und gewährt, und zu Ihm werdet ihr zurückgebracht.(2:245)",
				"Siehst du nicht die führende Schar von den Kindern Isrāʾīls nach Mūsā, als sie zu einem ihrer Propheten sagten: „Setze einen König für uns ein, damit wir auf Allahs Weg kämpfen.“? Er sagte: „Werdet ihr vielleicht, wenn euch zu kämpfen vorgeschrieben ist, doch nicht kämpfen?“ Sie sagten: „Warum sollten wir nicht auf Allahs Weg kämpfen, wo wir doch aus unseren Wohnstätten und von unseren Söhnen vertrieben worden sind?“ Doch als ihnen vorgeschrieben wurde zu kämpfen, kehrten sie sich – bis auf wenige von ihnen – ab. Und Allah weiß über die Ungerechten Bescheid.(2:246)",
				"Und ihr Prophet sagte zu ihnen: „Allah hat euch (hiermit) Ṭālūt als König geschickt.“ Sie sagten: „Wie sollte er die Herrschaft über uns haben, wo wir doch ein größeres Anrecht auf die Herrschaft haben, und ihm nicht Wohlstand gegeben ist?“ Er sagte: „Allah hat ihn vor euch auserwählt und ihm ein Übermaß an Wissen und körperlichen Vorzügen verliehen. Und Allah gibt Seine Herrschaft, wem Er will. Allah ist Allumfassend und Allwissend.“(2:247)",
				"Und ihr Prophet sagte zu ihnen: „Das Zeichen seiner Herrschaft ist, daß die Bundeslade zu euch kommen wird; in ihr ist innere Ruhe von eurem Herrn und ein Rest von dem, was die Sippe Mūsās und die Sippe Hārūns hinterließen, getragen von Engeln. Darin soll wahrlich ein Zeichen für euch sein, wenn ihr gläubig seid.“(2:248)",
				"Und als nun Ṭālūt mit den Heerscharen aufgebrochen war, sagte er: „Allah wird euch mit einem Fluß prüfen. Wer davon trinkt, gehört nicht zu mir. Und wer nicht davon kostet, der gehört zu mir, außer demjenigen, der (nur) eine Handvoll schöpft.“ Da tranken sie davon – bis auf wenige von ihnen. Und als er ihn überschritten hatte, er und diejenigen, die mit ihm glaubten, sagten sie: „Wir haben heute keine Kraft gegen Ğālūt und seine Heerscharen.“ Diejenigen aber, die glaubten, daß sie Allah begegnen würden, sagten: „Wie so manch eine geringe Schar hat schon mit Allahs Erlaubnis eine große Schar besiegt! Allah ist mit den Standhaften.“(2:249)",
				"Und als sie gegen Ğālūt und seine Heerscharen auf dem Plan erschienen, sagten sie: „Unser Herr, überschütte uns mit Standhaftigkeit, festige unsere Füße und verhilf uns zum Sieg über das ungläubige Volk!“(2:250)",
				"Und so schlugen sie sie mit Allahs Erlaubnis, und Dāwūd tötete Ğālūt. Und Allah gab ihm die Herrschaft und die Weisheit und lehrte ihn von dem, was Er wollte. Und wenn nicht Allah die einen Menschen durch die anderen zurückweisen würde, geriete die Erde wahrlich ins Verderben. Aber Allah ist voll Huld gegen die Weltenbewohner.(2:251)",
				"Dies sind Allahs Zeichen, die Wir dir der Wahrheit entsprechend verlesen. Und du bist wahrlich einer der Gesandten.(2:252)",
				"Dies sind die Gesandten; einige von ihnen haben Wir vor anderen bevorzugt. Unter ihnen gibt es manche, zu denen Allah gesprochen hat, und einige, die Er um Rangstufen erhöht hat. Und ʿĪsā, dem Sohn Maryams, gaben Wir die klaren Beweise und stärkten ihn mit dem Heiligen Geist. Und wenn Allah gewollt hätte, hätten diejenigen nach ihnen nicht miteinander gekämpft, nachdem die klaren Beweise zu ihnen gekommen waren. Aber sie waren uneinig: Unter ihnen gab es manche, die glaubten und andere, die ungläubig waren. Und wenn Allah gewollt hätte, hätten sie nicht miteinander gekämpft. Doch Allah tut, was Er will.(2:253)",
				"O die ihr glaubt, gebt aus von dem, womit Wir euch versorgt haben, bevor ein Tag kommt, an dem es keinen Verkauf, keine Freundschaft und keine Fürsprache gibt! Die Ungläubigen sind die Ungerechten.(2:254)",
				"Allah – es gibt keinen Gott außer Ihm, dem Lebendigen und Beständigen. Ihn überkommt weder Schlummer noch Schlaf. Ihm gehört (alles), was in den Himmeln und was auf der Erde ist. Wer ist es denn, der bei Ihm Fürsprache einlegen könnte – außer mit Seiner Erlaubnis? Er weiß, was vor ihnen und was hinter ihnen liegt, sie aber umfassen nichts von Seinem Wissen – außer, was Er will. Sein Thronschemel umfaßt die Himmel und die Erde, und ihre Behütung beschwert Ihn nicht. Er ist der Erhabene und Allgewaltige.(2:255)",
				"Es gibt keinen Zwang im Glauben. (Der Weg der) Besonnenheit ist nunmehr klar unterschieden von (dem der) Verirrung. Wer also falsche Götter verleugnet, jedoch an Allah glaubt, der hält sich an der festesten Handhabe, bei der es kein Zerreißen gibt. Und Allah ist Allhörend und Allwissend.(2:256)",
				"Allah ist der Schutzherr derjenigen, die glauben. Er bringt sie aus den Finsternissen heraus ins Licht. Diejenigen aber, die ungläubig sind, deren Schutzherren sind die falschen Götter. Sie bringen sie aus dem Licht hinaus in die Finsternisse. Das sind Insassen des (Höllen)feuers. Ewig werden sie darin bleiben.(2:257)",
				"Siehst du nicht jenen, der mit Ibrāhīm über seinen Herrn stritt, weil Allah ihm die Herrschaft gegeben hatte? (Damals) als Ibrāhīm sagte: „Mein Herr ist Derjenige, Der lebendig macht und sterben läßt.“ Er sagte: „Ich mache lebendig und lasse sterben.“ Ibrāhīm sagte: „Allah bringt ja die Sonne vom Osten her; so bringe du sie vom Westen her!“ Da war derjenige, der ungläubig war, verblüfft. Und Allah leitet nicht das ungerechte Volk recht.(2:258)",
				"Oder (kennst du nicht) einen ähnlichen, denjenigen, der an einer Stadt vorbeikam, die wüst in Trümmern lag? Er sagte: „Wie sollte Allah diese (Stadt) wieder lebendig machen, nachdem sie ausgestorben ist?“ Da ließ Allah ihn (für) hundert Jahre tot sein. Hierauf erweckte Er ihn und sagte: „Wie lange hast du verweilt?“ Er sagte: „Ich verweilte einen Tag oder den Teil eines Tages.“ Er sagte: „Nein! Vielmehr verweiltest du hundert Jahre. Nun schau deine Speise und dein Getränk an! Sie sind nicht verfault. Und schau deinen Esel an! – Und damit Wir dich zu einem Zeichen machen für die Menschen. Und schau die Knochen an, wie Wir sie zusammensetzen und sie hierauf mit Fleisch bekleiden!“ Nachdem es ihm klar geworden war, sagte er: „Ich weiß (jetzt), daß Allah zu allem die Macht hat.“(2:259)",
				"Und als Ibrāhīm sagte: „Mein Herr, zeige mir, wie Du die Toten lebendig machst!“ Er sagte: „Glaubst du immer noch nicht?“ Er sagte: „Doch, aber (ich frage,) damit mein Herz Ruhe findet.“ Er (Allah) sagte: „So nimm vier von den Vögeln und zieh sie dann her zu dir. Hierauf setze auf jeden Berg einen Teil von ihnen. Hierauf rufe sie, so werden sie zu dir herbeigeeilt kommen. Und wisse, daß Allah Allmächtig und Allweise ist.“(2:260)",
				"Das Gleichnis derjenigen, die ihren Besitz auf Allahs Weg ausgeben, ist das eines Saatkorns, das sieben Ähren wachsen läßt, (und) in jeder Ähre hundert Körner. Allah vervielfacht, wem Er will. Und Allah ist Allumfassend und Allwissend.(2:261)",
				"Diejenigen, die ihren Besitz auf Allahs Weg ausgeben und hierauf dem, was sie ausgegeben haben, weder Vorhaltungen noch Beleidigungen nachfolgen lassen, die haben ihren Lohn bei ihrem Herrn, und keine Furcht soll über sie kommen, noch sollen sie traurig sein.(2:262)",
				"Freundliche Worte und Vergebung sind besser als ein Almosen, dem Beleidigungen nachfolgen. Allah ist Unbedürftig und Nachsichtig.(2:263)",
				"O die ihr glaubt, macht nicht eure Almosen durch Vorhaltungen und Beleidigungen zunichte, wie derjenige, der seinen Besitz aus Augendienerei vor den Menschen ausgibt und nicht an Allah und den Jüngsten Tag glaubt! So ist sein Gleichnis das eines glatten Steins mit Erdreich darüber: Ein heftiger Regenguß trifft ihn und läßt ihn nackt. Sie haben keine Macht über etwas von dem, was sie erworben haben. Allah leitet das ungläubige Volk nicht recht.(2:264)",
				"Das Gleichnis jener aber, die ihren Besitz im Trachten nach Allahs Zufriedenheit und aus ihrer Gewißheit ausgeben, ist das eines Gartens auf einer Anhöhe, den ein heftiger Regenguß trifft, und da bringt er seinen Ernteertrag zweifach (hervor). Und wenn ihn kein heftiger Regenguß trifft, so doch Sprühregen. Und was ihr tut, sieht Allah wohl.(2:265)",
				"Möchte einer von euch gern, daß er einen Garten habe mit Palmen und Rebstöcken, durcheilt von Bächen, in dem er von allen Früchten hat, während ihn (schon) hohes Alter getroffen hat und er (noch) schwache Nachkommenschaft hat, und daß ihn (den Garten) dann ein glühend heißer Wirbelwind treffe und er hierauf verbrenne? So macht Allah euch die Zeichen klar, auf daß ihr nachdenken möget!(2:266)",
				"O die ihr glaubt, gebt aus von den guten Dingen aus eurem Erworbenen und von dem, was Wir für euch aus der Erde hervorgebracht haben. Und sucht nicht zum Ausgeben das Schlechte davon aus, während ihr (selbst) es nicht nehmen würdet, ohne dabei ein Auge zuzudrücken. Und wißt, daß Allah Unbedürftig und Lobenswürdig ist.(2:267)",
				"Der Satan verspricht euch Armut und befiehlt euch Schändliches. Allah aber verspricht euch Vergebung von Sich aus und Huld. Allah ist Allumfassend und Allwissend.(2:268)",
				"Er gibt Weisheit, wem Er will; und wem Weisheit gegeben wurde, dem wurde da viel Gutes gegeben. Aber nur diejenigen bedenken, die Verstand besitzen.(2:269)",
				"Und was immer ihr an Spenden ausgebt oder als Gelübde gelobt, Allah weiß es. Und die Ungerechten werden keine Helfer haben.(2:270)",
				"Wenn ihr Almosen offen zeigt, so ist es trefflich. Wenn ihr sie aber verbergt und den Armen gebt, so ist es besser für euch, und Er (Allah) wird etwas von euren bösen Taten tilgen. Allah ist dessen, was ihr tut, Kundig.(2:271)",
				"Nicht dir obliegt ihre Rechtleitung, sondern Allah leitet recht, wen Er will. Was immer ihr an Gutem ausgebt, (das) ist für euch selbst. Und ihr gebt nur im Trachten nach Allahs Angesicht aus. Und was immer ihr an Gutem ausgebt, wird euch in vollem Maß zukommen, und es wird euch kein Unrecht zugefügt.(2:272)",
				"(Gebt am besten aus) für die Armen, die auf Allahs Weg daran gehindert werden, im Lande umherreisen zu können. Der Unwissende hält sie wegen ihrer Zurückhaltung für unbedürftig. Du erkennst sie an ihrem Merkmal: Sie betteln die Menschen nicht aufdringlich an. Und was immer ihr an Gutem ausgebt, so weiß Allah darüber Bescheid.(2:273)",
				"Diejenigen, die ihren Besitz bei Nacht und Tag, heimlich oder öffentlich ausgeben, haben ihren Lohn bei ihrem Herrn, und keine Furcht soll sie überkommen, noch werden sie traurig sein.(2:274)",
				"Diejenigen, die Zins verschlingen, werden nicht anders aufstehen als jemand, den der Satan durch Wahnsinn hin und her schlägt. Dies (wird sein), weil sie sagten: „Verkaufen ist das gleiche wie Zinsnehmen.“ Doch hat Allah Verkaufen erlaubt und Zinsnehmen verboten. Zu wem nun eine Ermahnung von seinem Herrn kommt, und der dann aufhört, dem soll gehören, was vergangen ist, und seine Angelegenheit steht bei Allah. Wer aber rückfällig wird, jene sind Insassen des (Höllen)feuers. Ewig werden sie darin bleiben.(2:275)",
				"Dahinschwinden lassen wird Allah den Zins und vermehren die Almosen. Allah liebt niemanden, der ein beharrlicher Ungläubiger und Sünder ist.(2:276)",
				"Gewiß, diejenigen, die glauben und rechtschaffene Werke tun, das Gebet verrichten und die Abgabe entrichten, die haben ihren Lohn bei ihrem Herrn, und keine Furcht soll sie überkommen, noch werden sie traurig sein.(2:277)",
				"O die ihr glaubt, fürchtet Allah und laßt das sein, was an Zins(geschäften) noch übrig ist, wenn ihr gläubig seid.(2:278)",
				"Wenn ihr es aber nicht tut, dann laßt euch Krieg von Allah und Seinem Gesandten ansagen! Doch wenn ihr bereut, dann steht euch euer (ausgeliehenes) Grundvermögen zu; (so) tut weder ihr Unrecht, noch wird euch Unrecht zugefügt.(2:279)",
				"Und wenn er (der Schuldner) in Schwierigkeiten ist, dann sei (ihm) Aufschub (gewährt,) bis eine Erleichterung (eintritt). Und daß ihr (es) als Almosen erlaßt, ist besser für euch, wenn ihr (es) nur wißt.(2:280)",
				"Und hütet euch vor einem Tag, an dem ihr zu Allah zurückgebracht werdet. Dann wird jeder Seele in vollem Maß zukommen, was sie verdient hat, und es wird ihnen kein Unrecht zugefügt.(2:281)",
				"O die ihr glaubt, wenn ihr auf eine festgesetzte Frist, einer vom anderen, eine Geldschuld aufnehmt, dann schreibt es auf. Und ein Schreiber soll (es) für euch gerecht aufschreiben. Und kein Schreiber soll sich weigern zu schreiben, so wie Allah (es) ihn gelehrt hat. So soll er denn schreiben, und diktieren soll der Schuldner, und er soll Allah, seinen Herrn, fürchten und nichts davon schmälern. Wenn aber der Schuldner töricht oder schwach ist oder unfähig, selbst zu diktieren, so soll sein Sachwalter (es) gerecht diktieren. Und bringt zwei Männer von euch als Zeugen. Wenn es keine zwei Männer sein (können), dann sollen es ein Mann und zwei Frauen sein, mit denen als Zeugen ihr zufrieden seid, – damit, wenn eine von beiden sich irrt, eine die andere erinnere. Und die Zeugen sollen sich nicht weigern, wenn sie aufgefordert werden. Und seid nicht abgeneigt, es – (seien es) klein(e) oder groß(e Beträge) – mit seiner (vereinbarten) Frist aufzuschreiben! Das ist gerechter vor Allah und richtiger für das Zeugnis und eher geeignet, daß ihr nicht zweifelt; es sei denn, es ist ein sofortiger Handel, den ihr unter euch tätigt. Dann ist es keine Sünde für euch, wenn ihr es nicht aufschreibt. Und nehmt Zeugen, wenn ihr untereinander einen Verkauf abschließt. Und kein Schreiber oder Zeuge soll zu Schaden kommen. Wenn ihr (es) aber (dennoch) tut, so ist es ein Frevel von euch. Und fürchtet Allah! Und Allah lehrt euch. Allah weiß über alles Bescheid.(2:282)",
				"Und wenn ihr auf einer Reise seid und keinen Schreiber findet, dann sollen Pfänder in Empfang genommen werden. Und wenn dann einer von euch dem anderen (etwas) anvertraut, so soll derjenige, dem (es) anvertraut wurde, das ihm anvertraute Pfand (wieder) aushändigen, und er soll Allah, seinen Herrn, fürchten. Und verheimlicht kein Zeugnis. Wer es aber verheimlicht, dessen Herz ist gewiß sündhaft. Und Allah weiß über das, was ihr tut, Bescheid.(2:283)",
				"Allah gehört (alles), was in den Himmeln und was auf der Erde ist. Und ob ihr offenlegt, was in euch selbst ist, oder es verbergt, Allah wird euch dafür zur Rechenschaft ziehen. Dann vergibt Er, wem Er will, und straft, wen Er will. Und Allah hat zu allem die Macht.(2:284)",
				"Der Gesandte (Allahs) glaubt an das, was zu ihm von seinem Herrn (als Offenbarung) herabgesandt worden ist, und ebenso die Gläubigen; alle glauben an Allah, Seine Engel, Seine Bücher und Seine Gesandten – Wir machen keinen Unterschied bei jemandem von Seinen Gesandten. Und sie sagen: „Wir hören und gehorchen. (Gewähre uns) Deine Vergebung, unser Herr! Und zu Dir ist der Ausgang.“(2:285)",
				"Allah erlegt keiner Seele mehr auf, als sie zu leisten vermag. Ihr kommt (nur) zu, was sie verdient hat, und angelastet wird ihr (nur), was sie verdient hat. „Unser Herr, belange uns nicht, wenn wir (etwas) vergessen oder einen Fehler begehen. Unser Herr, lege uns keine Bürde auf, wie Du sie denjenigen vor uns auferlegt hast. Unser Herr, bürde uns nichts auf, wozu wir keine Kraft haben. Verzeihe uns, vergib uns und erbarme Dich unser! Du bist unser Schutzherr. So verhilf uns zum Sieg über das ungläubige Volk!“(2:286)",

				
			]
		},
		updateInterval: 120000,
		remoteFile: null,
		fadeSpeed: 3000,
		morningStartTime: 3,
		morningEndTime: 12,
		afternoonStartTime: 12,
		afternoonEndTime: 17
	},

	// Set currentweather from module
	currentWeatherType: "",

	// Define required scripts.
	getScripts: function() {
		return ["moment.js"];
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		this.lastComplimentIndex = -1;

		var self = this;
		if (this.config.remoteFile !== null) {
			this.koranFile(function(response) {
				self.config.KoranGerman = JSON.parse(response);
				self.updateDom();
			});
		}

		// Schedule update timer.
		setInterval(function() {
			self.updateDom(self.config.fadeSpeed);
		}, this.config.updateInterval);
	},

	/* randomIndex(KoranGerman)
	 * Generate a random index for a list of KoranGerman.
	 *
	 * argument KoranGerman Array<String> - Array with KoranGerman.
	 *
	 * return Number - Random index.
	 */
	randomIndex: function(KoranGerman) {
		if (KoranGerman.length === 1) {
			return 0;
		}

		var generate = function() {
			return Math.floor(Math.random() * KoranGerman.length);
		};

		var koranIndex = generate();

		while (koranIndex === this.lastComplimentIndex) {
			koranIndex = generate();
		}

		this.lastComplimentIndex = koranIndex;

		return koranIndex;
	},

	/* koranArray()
	 * Retrieve an array of KoranGerman for the time of the day.
	 *
	 * return KoranGerman Array<String> - Array with KoranGerman for the time of the day.
	 */
	koranArray: function() {
		var hour = moment().hour();
		var KoranGerman;

		if (hour >= this.config.morningStartTime && hour < this.config.morningEndTime && this.config.KoranGerman.hasOwnProperty("morning")) {
			KoranGerman = this.config.KoranGerman.morning.slice(0);
		} else if (hour >= this.config.afternoonStartTime && hour < this.config.afternoonEndTime && this.config.KoranGerman.hasOwnProperty("afternoon")) {
			KoranGerman = this.config.KoranGerman.afternoon.slice(0);
		} else if(this.config.KoranGerman.hasOwnProperty("evening")) {
			KoranGerman = this.config.KoranGerman.evening.slice(0);
		}

		if (typeof KoranGerman === "undefined") {
			KoranGerman = new Array();
		}

		if (this.currentWeatherType in this.config.KoranGerman) {
			KoranGerman.push.apply(KoranGerman, this.config.KoranGerman[this.currentWeatherType]);
		}

		KoranGerman.push.apply(KoranGerman, this.config.KoranGerman.anytime);

		return KoranGerman;
	},

	/* koranFile(callback)
	 * Retrieve a file from the local filesystem
	 */
	koranFile: function(callback) {
		var xobj = new XMLHttpRequest(),
			isRemote = this.config.remoteFile.indexOf("http://") === 0 || this.config.remoteFile.indexOf("https://") === 0,
			path = isRemote ? this.config.remoteFile : this.file(this.config.remoteFile);
		xobj.overrideMimeType("application/json");
		xobj.open("GET", path, true);
		xobj.onreadystatechange = function() {
			if (xobj.readyState === 4 && xobj.status === 200) {
				callback(xobj.responseText);
			}
		};
		xobj.send(null);
	},

	/* koranArray()
	 * Retrieve a random koran.
	 *
	 * return koran string - A koran.
	 */
	randomCompliment: function() {
		var KoranGerman = this.koranArray();
		var index = this.randomIndex(KoranGerman);

		return KoranGerman[index];
	},

	// Override dom generator.
	getDom: function() {
		var koranText = this.randomCompliment();

		var koran = document.createTextNode(koranText);
		var wrapper = document.createElement("div");
		wrapper.className = this.config.classes ? this.config.classes : "thin xlarge bright pre-line";
		wrapper.appendChild(koran);

		return wrapper;
	},

	// From data currentweather set weather type
	setCurrentWeatherType: function(data) {
		var weatherIconTable = {
			"01d": "day_sunny",
			"02d": "day_cloudy",
			"03d": "cloudy",
			"04d": "cloudy_windy",
			"09d": "showers",
			"10d": "rain",
			"11d": "thunderstorm",
			"13d": "snow",
			"50d": "fog",
			"01n": "night_clear",
			"02n": "night_cloudy",
			"03n": "night_cloudy",
			"04n": "night_cloudy",
			"09n": "night_showers",
			"10n": "night_rain",
			"11n": "night_thunderstorm",
			"13n": "night_snow",
			"50n": "night_alt_cloudy_windy"
		};
		this.currentWeatherType = weatherIconTable[data.weather[0].icon];
	},

	// Override notification handler.
	notificationReceived: function(notification, payload, sender) {
		if (notification === "CURRENTWEATHER_DATA") {
			this.setCurrentWeatherType(payload.data);
		}
	},

});
