using Microsoft.EntityFrameworkCore.Migrations;

namespace HaloArmory.API.Migrations
{
    public partial class ItemModelExtended : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Durability",
                table: "Items",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "Items",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Durability",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "Items");
        }
    }
}
