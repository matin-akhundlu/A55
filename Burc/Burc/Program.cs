using Helpers;
using System;
using System.Threading;

namespace Exercise_15
{
    class Program
    {
        static void Main(string[] args)
        {
            ConsoleHelper.SetDefaults();
        l1:
            Console.WriteLine("IF operatoru ile yoxla.\n" +
                "Verilmish ededdin 1 - ile 365 arasinda olugunu yoxla(1 ve 365 ozude daxil olmaq sherti ile)\n" +
                "Ededin ilin hansi ayina dushduyunu tap.Ve hemin ay ve gune uygun hansi burc oldugunu goster\n-----------------------------");

            int dayOfYear = InputHelper.GetIntFromConsole("Ədədi daxil edin: ");

            //if (!(dayOfYear >= 1 && dayOfYear <= 365))
            if (dayOfYear < 1 || dayOfYear > 365)
            {
                Console.Clear();
                goto l1;
            }

            //ConsoleHelper.SetDefaults(); /*-Azebaycan mədəniyyəti tətbq edildiyi üçün ay adları öz dilimizdə gəlir*/
            var months = Thread.CurrentThread.CurrentCulture.DateTimeFormat.MonthNames;


            //https://stackoverflow.com/questions/21960499/how-to-get-date-from-day-of-year
            int year = DateTime.Now.Year;
            DateTime theDate = new DateTime(year, 1, 1).AddDays(dayOfYear - 1);

            int monthNumber = theDate.Month;
            int monthIndex = monthNumber - 1;

            Console.ForegroundColor = ConsoleColor.Green;

            Console.WriteLine($">> Günə aid tarix: {theDate.ToShortDateString()}");
            Console.WriteLine($">> {months[monthIndex]}-ayına aid ilin günüdür");

            /*
                    https://www.facebook.com/permalink.php?id=1831393723791787&story_fbid=2060278854236605
                  
                   
             */


            if ((theDate.Month == 12 && theDate.Day > 22) || (theDate.Month == 1 && theDate.Day <= 20))
            {
                Console.WriteLine("Oğlaq burcudur"); // Oğlaq       22 dekabr-20 yanvar
            }
            else if ((theDate.Month == 1 && theDate.Day > 21) || (theDate.Month == 2 && theDate.Day <= 18))
            {
                Console.WriteLine("Dolça burcudur"); // Dolça       21 yanvar-18 fevral
            }
            else if ((theDate.Month == 2 && theDate.Day > 19) || (theDate.Month == 3 && theDate.Day <= 20))
            {
                Console.WriteLine("Balıqlar burcudur"); //  Balıqlar    19 fevral-20 mart
            }
            else if ((theDate.Month == 3 && theDate.Day > 21) || (theDate.Month == 04 && theDate.Day <= 21))
            {
                Console.WriteLine("Qoç burcudur"); // Qoç         21 mart-20 aprel
            }
            else if ((theDate.Month == 4 && theDate.Day > 21) || (theDate.Month == 5 && theDate.Day <= 21))
            {
                Console.WriteLine("Buğa burcudur"); // Buğa        21 aprel-21 may
            }
            else if ((theDate.Month == 5 && theDate.Day > 22) || (theDate.Month == 6 && theDate.Day <= 21))
            {
                Console.WriteLine("Əkizlər burcudur"); //Əkizlər     22 may-21 iyun
            }
            else if ((theDate.Month == 6 && theDate.Day > 22) || (theDate.Month == 7 && theDate.Day <= 22))
            {
                Console.WriteLine("Xərçəng burcudur"); // Xərçəng     22 iyun-22 iyul
            }
            else if ((theDate.Month == 7 && theDate.Day > 23) || (theDate.Month == 8 && theDate.Day <= 23))
            {
                Console.WriteLine("Şir burcudur"); //Şir         23 iyul - 23 avqust
            }
            else if ((theDate.Month == 8 && theDate.Day > 24) || (theDate.Month == 9 && theDate.Day <= 23))
            {
                Console.WriteLine("Qız burcudur"); //Qız         24 avqust - 23 sentyabr
            }
            else if ((theDate.Month == 9 && theDate.Day > 24) || (theDate.Month == 10 && theDate.Day <= 23))
            {
                Console.WriteLine("Tərəzi burcudur"); //  Tərəzi      24 sentyabr-23 oktyabr
            }
            else if ((theDate.Month == 10 && theDate.Day > 24) || (theDate.Month == 11 && theDate.Day <= 22))
            {
                Console.WriteLine("Əqrəb burcudur"); // Əqrəb       24 oktyabr-22 noyabr
            }
            else
            {
                Console.WriteLine("Oxatan burcudur"); //   Oxatan      23 noyabr-21 dekabr
            }


            Console.ReadKey();

        }
    }
}
