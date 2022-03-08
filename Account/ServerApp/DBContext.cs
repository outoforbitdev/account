using System;
using Microsoft.EntityFrameworkCore;
using Account.Model;

namespace Account
{
    public class DBContext: DbContext
    {
        public DbSet<string> ExampleTable { get; set; }


        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<string>().HasKey(s => new { s.Length });
        }

        public DBContext(): base()
        {

        }


    }
}
