using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Main method started");

            if (args.Length>0)
            {
                Console.WriteLine("Parameter sent");

            }

            else

            {

                Console.WriteLine("Parameter have not sent");
            }


            MyMethod1();


            Console.ReadKey();
        }

        static void MyMethod1()

        {
            Console.WriteLine("Example-1");
                
                }

        void MyMethod2()

        {
            Console.WriteLine("Example-2");

        }

    }
}
