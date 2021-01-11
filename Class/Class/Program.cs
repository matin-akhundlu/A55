using System;

namespace Class
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.ForegroundColor = ConsoleColor.DarkCyan;

            Class1 M55 = new Class1(1);
            M55.user = 1;
            M55.Title = "Aut nihil aut P511.";
            M55.Completed = true;
            Console.WriteLine(M55);


            Console.ReadKey();
        }
    }
}
