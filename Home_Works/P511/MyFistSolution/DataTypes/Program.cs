using System;

namespace DataTypes
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Info");

            byte a = 4;

            int sizeOfByte = sizeof(byte);
            var defualtValueOfByte = default(byte);
            //tyfeof(byte).Name
            

            Console.WriteLine($"----BYTE----" +
                $"\nsize={sizeOfByte} byte" +
                $"\nvalue={a}" +
                $"\nMinValue={byte.MinValue}" +
                $"\nMaxValue={byte.MaxValue}" +
                $"\nDefault={defualtValueOfByte}" +
                $"\nCts Type Name={a.GetType().Name}");



            int b = 4;

            int sizeOfint = sizeof(int);
            //var defualtValueOfByte = default(int);
            ////tyfeof(byte).Name


            Console.WriteLine($"----{b.GetType().Name}----" +
                $"\nsize={sizeOfint} byte" +
                $"\nvalue={b}" +
                $"\nMinValue={int.MinValue}" +
                $"\nMaxValue={int.MaxValue}" +
                $"\nDefault={default(int)}" +
                $"\nCts Type Name={b.GetType().Name}");


            Console.ReadKey();
        }
    }
}
