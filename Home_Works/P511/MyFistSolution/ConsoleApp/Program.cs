using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Press any key to start registry.");

            Console.ReadLine();

            Console.Write("Enter your first name:");
            String name = Console.ReadLine();

            Console.Write("Enter your last name:");
            string surname = Console.ReadLine();

            Console.Write("Enter date of your birthday.:");
            string birthday = Console.ReadLine();

            Console.WriteLine($"Welcome. {name} {surname} {birthday}. ");
            Console.WriteLine("Registration is completed. Thank you for the chosen us.");

            Console.WriteLine("If you want to close this page, please press any key.");


            Console.ReadKey();

        }
    }
}
