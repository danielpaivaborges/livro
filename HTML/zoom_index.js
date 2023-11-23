dictwords = ["git 0 112 255",
	"click 0 10 64 1 10 16",
	"display 0 10 64 1 10 16",
	"table 0 10 32 1 10 16",
	"contents 0 10 32 1 10 16",
	"navigation 0 10 32 1 10 8",
	"github 0 16 160",
	"sistema 0 15 96",
	"controle 0 15 96",
	"versões 0 15 96",
	"distribuído 0 15 96",
	"usado 0 27 96",
	"principalmente 0 15 96",
	"desenvolvimento 0 15 96",
	"software 0 15 96",
	"mas 0 15 96",
	"pode 0 15 96",
	"ser 0 23 104",
	"para 0 58 110",
	"registrar 0 15 80",
	"histórico 0 10 16",
	"edições 0 10 16",
	"qualquer 0 10 16",
	"tipo 0 10 16",
	"arquivo 0 33 26",
	"arquivos 0 72 31",
	"sempre 0 26 24",
	"encontram 0 10 16",
	"algum 0 10 16",
	"estado 0 33 26",
	"untracked 0 26 20",
	"unmodified 0 18 18",
	"modified 0 26 21",
	"stage 0 40 30",
	"entender 0 10 16",
	"esses 0 10 16",
	"estados 0 10 16",
	"nos 0 10 16",
	"ajuda 0 10 16",
	"saber 0 10 16",
	"melhor 0 10 16",
	"qual 0 10 16",
	"momento 0 10 16",
	"certo 0 10 16",
	"usar 0 10 16",
	"cada 0 10 16",
	"comando 0 26 20",
	"marcados 0 18 20",
	"como 0 18 20",
	"são 0 26 21",
	"não 0 18 24",
	"monitorados 0 26 25",
	"pelo 0 18 17",
	"que 0 66 15",
	"acabaram 0 10 8",
	"criados 0 10 8",
	"estarão 0 10 8",
	"com 0 10 8",
	"esse 0 10 8",
	"touch 0 10 8",
	"arq01 0 18 8",
	"status 0 18 12",
	"utilize 0 10 8",
	"add 0 18 12",
	"incluir 0 10 8",
	"será 0 10 8",
	"submetido 0 10 8",
	"comece 0 10 8",
	"versionar 0 10 8",
	"precisamos 0 18 12",
	"mudá-lo 0 10 8",
	"note 0 10 8",
	"vai 0 10 8",
	"dar 0 18 4",
	"dica 0 10 4",
	"fazer 0 10 4",
	"quando 0 18 6",
	"executar 0 10 4",
	"novos 0 10 4",
	"modificados 0 10 4",
	"serão 0 10 4",
	"salvos 0 10 4",
	"próximo 0 10 4",
	"commit 0 66 7",
	"anterior 0 10 4",
	"faz 0 10 4",
	"adicionar 0 10 4",
	"agora 0 10 4",
	"salvar 0 10 4",
	"nova 0 10 4",
	"versão 0 10 2",
	"repositório 0 18 2",
	"meu 0 10 2",
	"primeiro 0 10 2",
	"realizamos 0 10 2",
	"saem 0 10 2",
	"isso 0 10 2",
	"significa 0 10 2",
	"linha 0 10 2",
	"tempo 0 10 2",
	"seu 0 10 2",
	"está 0 10 2",
	"igual 0 10 2",
	"salvo 0 10 2",
	"último 0 26 3",
	"salvamos 0 10 2",
	"passa 0 10 2",
	"informar 0 10 2",
	"das 0 10 2",
	"mudanças 0 10 1",
	"head 0 10 1",
	"diante 0 10 1",
	"sofreram 0 10 1",
	"alguma 0 10 1",
	"alteração 0 10 1",
	"desde 0 10 1",
	"hist.. 0 6 64",
	"git.html 0 6 64",
	"css 1 28 148",
	"topics 1 10 8",
	"above 1 10 8",
	"this 1 10 8",
	"level 1 10 8",
	"enter 1 15 66",
	"topic 1 15 66",
	"text 1 15 66",
	"here.asdfasdfasdf 1 15 66",
	"asd 1 15 66",
	"sdf 1 15 65",
	"asdf 1 49 65",
	"introduction.html 1 6 64"];
skipwords = ["and",
	"or",
	"the",
	"it",
	"is",
	"an",
	"on",
	"we",
	"us",
	"to",
	"of",
	"has",
	"be",
	"all",
	"for",
	"in",
	"as",
	"so",
	"are",
	"that",
	"can",
	"you",
	"at",
	"its",
	"by",
	"have",
	"with",
	"into"];
var STR_FORM_SEARCHFOR = "Search for:";
var STR_FORM_SUBMIT_BUTTON = "Submit";
var STR_FORM_RESULTS_PER_PAGE = "Results per page:";
var STR_FORM_MATCH = "Match:";
var STR_FORM_ANY_SEARCH_WORDS = "any search words";
var STR_FORM_ALL_SEARCH_WORDS = "all search words";
var STR_NO_QUERY = "No search query entered.";
var STR_RESULTS_FOR = "Search results for:";
var STR_NO_RESULTS = "No results";
var STR_RESULT = "result";
var STR_RESULTS = "results";
var STR_PHRASE_CONTAINS_COMMON_WORDS = "Your search query contained too many common words to return the entire set of results available. Please try again with a more specific query for better results.";
var STR_SKIPPED_FOLLOWING_WORDS = "The following word(s) are in the skip word list and have been omitted from your search:";
var STR_SKIPPED_PHRASE = "Note that you can not search for exact phrases beginning with a skipped word";
var STR_SUMMARY_NO_RESULTS_FOUND = "No results found.";
var STR_SUMMARY_FOUND_CONTAINING_ALL_TERMS = "found containing all search terms.";
var STR_SUMMARY_FOUND_CONTAINING_SOME_TERMS = "found containing some search terms.";
var STR_SUMMARY_FOUND = "found.";
var STR_PAGES_OF_RESULTS = "pages of results.";
var STR_POSSIBLY_GET_MORE_RESULTS = "You can possibly get more results searching for";
var STR_ANY_OF_TERMS = "any of the terms";
var STR_DIDYOUMEAN = "Did you mean:";
var STR_SORTEDBY_RELEVANCE = "Sorted by relevance";
var STR_SORTBY_RELEVANCE = "Sort by relevance";
var STR_SORTBY_DATE = "Sort by date";
var STR_SORTEDBY_DATE = "Sorted by date &#9660;";
var STR_RESULT_TERMS_MATCHED = "Terms matched: ";
var STR_RESULT_SCORE = "Score: ";
var STR_RESULT_URL = "URL:";
var STR_RESULT_PAGES = "Result Pages:";
var STR_RESULT_PAGES_PREVIOUS = "Previous";
var STR_RESULT_PAGES_NEXT = "Next";
var STR_FORM_CATEGORY = "Category:";
var STR_FORM_CATEGORY_ALL = "All";
var STR_FORM_DATE_FROM = "From:";
var STR_FORM_DATE_TO = "To:";
var STR_FORM_DATE_BUTTON = "&laquo;";
var STR_RESULTS_IN_ALL_CATEGORIES = "in all categories";
var STR_RESULTS_IN_CATEGORY = "in category";
var STR_POWEREDBY = "Search powered by";
var STR_MORETHAN = "More than";
var STR_ALL_CATS = "all categories";
var STR_CAT_SUMMARY = "Refine your search by category:";
var STR_OR = "or";
var STR_RECOMMENDED = "Recommended links";
var STR_SORTEDBY_DATE_ASC = "Sorted by date &#9650;";
var STR_SEARCH_TOOK = "Search took";
var STR_SECONDS = "seconds";
var STR_MAX_RESULTS = "You have requested more results than served per query. Please try again with a more precise query.";
